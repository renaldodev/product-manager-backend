import { User } from '../../entity/User';
import { IUserRepository } from '../../repository/IUserRepository';

export class ListUserCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }
}
