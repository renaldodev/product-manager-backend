import { UserRepository } from '../../repository/implementation/UserRepository';
import { DeleteUserCase } from './DeleteUserCase';
import { DeleteUserController } from './DeleteUserController';

const deleteUserCase = new DeleteUserCase(new UserRepository());
const deleteUserController = new DeleteUserController(deleteUserCase);

export { deleteUserCase, deleteUserController };
