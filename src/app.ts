import express from 'express';
import fileUpload from 'express-fileupload';
import { createServer } from 'http';
import cors from 'cors';

import { route as routeUser } from './routes/route';
const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload());
const server = createServer(app);

app.use(routeUser);
export { server, app };
