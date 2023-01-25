import 'dotenv/config';
import { IncomingMessage } from 'http';
import { Transform } from 'stream';
import { pipeline } from 'stream/promises';
import { WebSocketServer, createWebSocketStream, WebSocket } from 'ws';
import { Commands, DEFAULT_WS_PORT } from '../constants';
import { controller } from './controller';
import { alertNewConnection } from './utils';

const WS_PORT: number = Number(process.env.WS_PORT) || DEFAULT_WS_PORT;

export const wss = new WebSocketServer({ port: WS_PORT });
console.log(`Start Websocket server on the ${WS_PORT} port!`);

wss.on('connection', async (ws: WebSocket, req: IncomingMessage) => {
  const { remotePort } = req.socket;
  const { size } = wss.clients;
  alertNewConnection(remotePort, size);

  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  const transformStream = new Transform({
    async transform(data, _, callback) {
      console.log(data);
      const [commandName, ...commandValue] = data.split(' ');

      const result: string | void = await controller[commandName as Commands](commandValue.map(Number));

      result ? callback(null, `${commandName} ${result}`) : callback(null, data);
    },
    encoding: 'utf8',
    decodeStrings: false,
  });

  await pipeline(duplex, transformStream, duplex);
});

wss.on('error ', (error) => {
  console.log('error ', error);
});

process.on('SIGINT', () => {
  wss.clients.forEach((ws: WebSocket) => ws.terminate());
  wss.close(() => console.log('Websocket server is closed'));
});
