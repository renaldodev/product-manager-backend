import { HasRole } from './../middleware/HasRole';
import { isAuthencicated } from './../middleware/IsAuthenticated';
import { authController } from './../useCases/auth';
import { createUserController } from './../useCases/createUser';
import { deleteUserController } from './../useCases/deleteUser';
import { listUserController } from './../useCases/listUser';
import { Router } from 'express';

const route = Router();

route.get('/users', isAuthencicated, HasRole, (req, res) => {
  return listUserController.handle(req, res);
});
route.post('/users', (req, res) => {
  return createUserController.handle(req, res);
});

route.delete('/users/:id', (req, res) => {
  return deleteUserController.handle(req, res);
});

route.post('/auth/login', async (req, res) => {
  return await authController.handle(req, res);
});

export { route };
