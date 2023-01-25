import 'dotenv/config';
import { WebSocketServer, createWebSocketStream, WebSocket } from 'ws';
import { DEFAULT_WS_PORT } from '../constants';

const WS_PORT: number = Number(process.env.WS_PORT) || DEFAULT_WS_PORT;

export const wss = new WebSocketServer({ port: WS_PORT });
console.log(`Start Websocket server on the ${WS_PORT} port!`);

wss.on('connection', async (ws: WebSocket) => {
  const duplex = createWebSocketStream(ws, { encoding: 'utf8' });
});

process.on('SIGINT', () => {
  wss.clients.forEach((ws: WebSocket) => ws.terminate());
  wss.close(() => console.log('Websocket server is closed'));
});
