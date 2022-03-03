import { UserRepository } from '../../repository/implementation/UserRepository';
import { ListUserCase } from './ListUserCase';
import { ListUserController } from './ListUserControler';

const listUserCase = new ListUserCase(new UserRepository());
const listUserController = new ListUserController(listUserCase);

export { listUserCase, listUserController };
