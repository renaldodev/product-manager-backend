import { Category } from '@prisma/client';
import { ICAtegoryReository } from '../../repository/ICategoryRepository';

export class ListCategoryCase {
  constructor(private categoryRepository: ICAtegoryReository) {}

  async execute(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }
}
