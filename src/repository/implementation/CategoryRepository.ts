import { Category } from '../../entity/Category';
import { ICAtegoryReository } from '../ICategoryRepository';
import { prisma } from '../../database/primaClint';
export class CategoryRepository implements ICAtegoryReository {
  async create(category: Category): Promise<void> {
    await prisma.category.create({ data: category });
  }
  async find(): Promise<Category[]> {
    return await prisma.category.findMany();
  }
  update(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
