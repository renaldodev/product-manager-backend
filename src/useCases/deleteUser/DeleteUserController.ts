import { Request, Response } from 'express';
import { DeleteUserCase } from './DeleteUserCase';

export class DeleteUserController {
  constructor(private deleteUserCase: DeleteUserCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    try {
      await this.deleteUserCase.execute(id);
      return response.status(200).send();
    } catch (error: any) {
      return response.status(400).json({
        error: error.message || 'Unexpcted error',
      });
    }
  }
}
