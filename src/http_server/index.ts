import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import { DEFAULT_HTTP_PORT } from '../constants';

const HTTP_PORT: number = Number(process.env.HTTP_PORT) || DEFAULT_HTTP_PORT;

const httpServer = http.createServer(function (req, res) {
  const __dirname = path.resolve(path.dirname(''));
  const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);
  fs.readFile(file_path, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});

httpServer.listen(HTTP_PORT);
console.log(`Start HTTP server on the ${HTTP_PORT} port!`);

process.on('SIGINT', () => {
  httpServer.close(() => console.log('HTTP server is closed'));
});
