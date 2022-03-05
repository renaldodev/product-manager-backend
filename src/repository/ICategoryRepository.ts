import { Category } from '../entity/Category';

export interface ICAtegoryReository {
  create(category: Category): Promise<void>;
  find(): Promise<Category[]>;
  update(id: string): Promise<void>;
  remove(id: string): Promise<void>;
}
