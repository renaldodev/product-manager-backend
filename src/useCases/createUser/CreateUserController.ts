import { Request, Response } from 'express';
import { CreateUserCase } from './CreateUserCases';

export class CreateUserController {
  constructor(private createUserCase: CreateUserCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, role, password } = request.body;
    try {
      await this.createUserCase.execute({
        email,
        name,
        password,
        role,
      });
      return response.status(201).send();
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpectd error',
      });
    }
  }
}
