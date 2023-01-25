import 'dotenv/config';
import { DEFAULT_HTTP_PORT, DEFAULT_WS_PORT } from './constants';
import { httpServer } from './http_server/index';
// import { mouse } from '@nut-tree/nut-js';

const HTTP_PORT = Number(process.env.HTTP_PORT) || DEFAULT_HTTP_PORT;
const WS_PORT = Number(process.env.WS_PORT) || DEFAULT_WS_PORT;

httpServer.listen(HTTP_PORT);
console.log(`Start static http server on the ${HTTP_PORT} port!`);
