import { IUserRepository } from '../../repository/IUserRepository';

export class DeleteUserCase {
  constructor(private userRepositore: IUserRepository) {}
  async execute(userId: string) {
    const userExits = await this.userRepositore.findByID(userId);
    if (!userExits) {
      throw new Error(`Can't remove user with id ${userId}, user not found`);
    }
    return await this.userRepositore.remove(userId);
  }
}
