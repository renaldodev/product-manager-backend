import express from 'express';
import { createServer } from 'http';
import { isAuthencicated } from './middleware/IsAuthenticated';
import { authController } from './useCases/auth';
import { createUserController } from './useCases/createUser';
import { deleteUserController } from './useCases/deleteUser';
import { listUserController } from './useCases/listUser';

const app = express();
app.use(express.json());
const server = createServer(app);

app.get('/users', isAuthencicated, (req, res) => {
  return listUserController.handle(req, res);
});
app.post('/users', (req, res) => {
  return createUserController.handle(req, res);
});

app.delete('/users/:id', (req, res) => {
  return deleteUserController.handle(req, res);
});

app.post('/auth/login', async (req, res) => {
  return await authController.handle(req, res);
});

export { server, app };
