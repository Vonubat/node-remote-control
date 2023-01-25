import 'dotenv/config';
import { WebSocketServer } from 'ws';
import { DEFAULT_WS_PORT } from '../constants';

const WS_PORT: number = Number(process.env.WS_PORT) || DEFAULT_WS_PORT;

const wss = new WebSocketServer({ port: WS_PORT });
console.log(`Start websocket server on the ${WS_PORT} port!`);
