import dotenv from 'dotenv';
import http from 'http';
import express from "express"
import { handler } from './build/handler.js';

dotenv.config();

const app = express()
app.use(handler)
http.createServer(app).listen(80)
console.log("Loaded HTTPS config");

