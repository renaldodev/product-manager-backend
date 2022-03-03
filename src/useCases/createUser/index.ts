import { UserRepository } from '../../repository/implementation/UserRepository';
import { CreateUserCase } from './CreateUserCases';
import { CreateUserController } from './CreateUserController';

const createUserCase = new CreateUserCase(new UserRepository());
const createUserController = new CreateUserController(createUserCase);

export { createUserCase, createUserController };
