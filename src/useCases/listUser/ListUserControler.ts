import { Request, Response } from 'express';
import { ListUserCase } from './ListUserCase';

export class ListUserController {
  constructor(private listUserCase: ListUserCase) {}
  async handle(_: Request, response: Response): Promise<Response> {
    const users = await this.listUserCase.execute();
    return response.json(users);
  }
}
