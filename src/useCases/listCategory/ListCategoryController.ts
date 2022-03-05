import { Request, Response } from 'express';
import { ListCategoryCase } from './ListCategoryCase';

export class ListCategoryController {
  constructor(private listCategoryCase: ListCategoryCase) {}
  async handle(_: Request, response: Response): Promise<Response> {
    try {
      const categories = await this.listCategoryCase.execute();
      return response.json(categories);
    } catch (error: any) {
      return response
        .status(500)
        .json({ error: error.message || 'Unexpcted error' });
    }
  }
}
