import fs from 'fs';
import { env } from 'process';
import dotenv from 'dotenv';
import https from 'https';
import express from "express"
import { handler } from './build/handler.js';

dotenv.config();

const sslkey = fs.readFileSync(env.key)
const sslcert = fs.readFileSync(env.cert)
const PORT = env.PUBLIC_SSL_PORT
const httpsOptions = {
  key: sslkey,
  cert: sslcert,
  port: PORT
};
const app = express()

app.use(handler)
console.log("Loaded HTTPS config");

https.createServer(httpsOptions, app).listen(PORT)