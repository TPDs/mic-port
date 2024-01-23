import fs from 'fs';
import { env } from 'process';
import dotenv from 'dotenv';
import https from 'https';
import express from "express"
import { handler } from './build/handler.js';
import morgan from 'morgan';

dotenv.config();

const sslkey = fs.readFileSync(env.key)
const sslcert = fs.readFileSync(env.cert)
const PORT = env.PORT
const httpsOptions = {
  key: sslkey,
  cert: sslcert,
  port: PORT
};

const logtype = ':remote-addr, -  :referrer, -  :method, - :url, - :status'
const logFilePath = env.LOG_FILE_PATH;
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });

const app = express()
app.use(morgan('logtype', { stream: logStream }));
app.use(handler)
https.createServer(httpsOptions, app).listen(PORT)
console.log("Loaded HTTPS config");

