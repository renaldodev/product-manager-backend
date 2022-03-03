import { IUserRepository } from '../../repository/IUserRepository';
import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcrypt';
export class AuthCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Email or password incorrect');
    }

    const isValidPassword = compareSync(password, user.password);
    if (!isValidPassword) {
      throw new Error('Email or password incorrect');
    }
    const token = sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
      process.env.APP_SECRET_KEY,
      { expiresIn: '1d' },
    );

    return token;
  }
}
