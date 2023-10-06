import fs from 'fs';
import { env } from '$env/dynamic/public';
import dotenv from 'dotenv';
import https from 'https';
import express from "express"
import { handler } from './build/handler.js';


dotenv.config('');

console.log(env.PUBLIC_PB_URL);

const sslkey = fs.readFileSync(env.key)
const sslcert = fs.readFileSync(env.cert)
const PORT = env.PORT
const httpsOptions = {
  key: sslkey,
  cert: sslcert,
  port: PORT
};
const app = express()

app.use(handler)
https.createServer(httpsOptions, app).listen(PORT)
console.log("Loaded HTTPS config");

