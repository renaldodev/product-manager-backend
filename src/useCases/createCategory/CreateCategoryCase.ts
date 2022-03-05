import { Category } from '../../entity/Category';
import { ICAtegoryReository } from '../../repository/ICategoryRepository';
import { ICreateCategoryDTO } from './CreateCategoryDTO';

export class CreateCategoryCase {
  constructor(private categoryRepository: ICAtegoryReository) {}
  async execute(category: ICreateCategoryDTO) {
    const newCategory = new Category(category);
    await this.categoryRepository.create(newCategory);
  }
}
