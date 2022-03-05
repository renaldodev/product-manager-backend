import express from 'express';
import { createServer } from 'http';
import cors from 'cors';

import { route as routeUser } from './routes/route';
const app = express();
app.use(express.json());
app.use(cors());
const server = createServer(app);

app.use(routeUser);
export { server, app };
