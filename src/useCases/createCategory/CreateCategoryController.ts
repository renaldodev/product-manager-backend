import { Request, Response } from 'express';
import { CreateCategoryCase } from './CreateCategoryCase';

export class CreateCategoryController {
  constructor(private createCatecoryCase: CreateCategoryCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, image } = request.body;
    try {
      await this.createCatecoryCase.execute({ name, description, image });
      return response.status(201).send();
    } catch (error: any) {
      return response
        .status(500)
        .json({ error: error.message || 'Unexpcted error' });
    }
  }
}
