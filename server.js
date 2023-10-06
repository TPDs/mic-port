import fs from 'fs';
import { env } from 'process';
import dotenv from 'dotenv';
import https from 'https';
import express from "express"
import { handler } from './build/handler.js';

dotenv.config();

const sslkey = fs.readFileSync(env.key)
const sslcert = fs.readFileSync(env.cert)
const PORT = env.PORT
const PUBLIC_PB_URL= env.PUBLIC_PB_URL
const PUBLIC_PB_ADMIN = env.PUBLIC_PB_ADMIN
const PUBLIC_PB_PW = env.PUBLIC_PB_PW
const httpsOptions = {
  key: sslkey,
  cert: sslcert,
  port: PORT
};
const app = express()

app.use(handler)
https.createServer(httpsOptions, app).listen(PORT)
console.log("Loaded HTTPS config");

