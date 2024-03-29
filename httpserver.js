import dotenv from 'dotenv';
import http from 'http';
import express from "express"
import { handler } from './build/handler.js';
//import { env } from '$env/dynamic/public';

dotenv.config();

const app = express()
app.use(handler)
http.createServer(app).listen(80)
console.log("Loaded HTTPS config");

