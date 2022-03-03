import { User } from '../entity/User';

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  create(user: User): Promise<void>;
  find(): Promise<User[]>;
  findByID(userId: string): Promise<User | null>;
  remove(id: string): Promise<void>;
  update(id: string, user: User): Promise<string>;
}
