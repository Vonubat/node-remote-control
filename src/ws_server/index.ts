import 'dotenv/config';
import { Transform } from 'stream';
import { pipeline } from 'stream/promises';
import { WebSocketServer, createWebSocketStream, WebSocket } from 'ws';
import { DEFAULT_WS_PORT } from '../constants';

const WS_PORT: number = Number(process.env.WS_PORT) || DEFAULT_WS_PORT;

export const wss = new WebSocketServer({ port: WS_PORT });
console.log(`Start Websocket server on the ${WS_PORT} port!`);

wss.on('connection', async (ws: WebSocket, req) => {
  const { remotePort } = req.socket;
  console.log(`\nNew connection established on the port: ${remotePort}. Clients connected: ${wss.clients.size}`);

  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  const transformStream = new Transform({
    transform(data, _, callback) {},
    decodeStrings: false,
    encoding: 'utf8',
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
