import { UserRepository } from '../../repository/implementation/UserRepository';
import { AuthCase } from './AuthCase';
import { AuthController } from './AuthController';

const authCase = new AuthCase(new UserRepository());
const authController = new AuthController(authCase);

export { authCase, authController };
