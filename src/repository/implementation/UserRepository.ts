import { prisma } from '../../database/primaClint';
import { User } from '../../entity/User';
import { IUserRepository } from '../IUserRepository';

export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findFirst({
      where: { email: email },
    });
  }
  async create(user: User): Promise<void> {
    await prisma.user.create({
      data: {
        email: user.email,
        password: user.password,
        name: user.name,
        role: user.role,
        id: user.id,
      },
    });
  }
  async find(): Promise<User[]> {
    return await prisma.user.findMany();
  }
  async findByID(userId: string): Promise<User | null> {
    return await prisma.user.findFirst({ where: { id: userId } });
  }
  async remove(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }
  update(id: string, user: User): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
