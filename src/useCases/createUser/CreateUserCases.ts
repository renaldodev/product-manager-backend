import { User } from '../../entity/User';
import { IUserRepository } from '../../repository/IUserRepository';
import { ICreateUserDTO } from './CreateUserDTO';

export class CreateUserCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(data: ICreateUserDTO) {
    const userAlreadyExits = await this.userRepository.findByEmail(data.email);
    if (userAlreadyExits) {
      throw new Error('User already exits');
    }
    const user = new User(data);
    await this.userRepository.create(user);
  }
}
