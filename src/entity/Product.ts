import { v4 } from 'uuid';
import { User } from './User';
import { Category } from './Category';

export class Product {
  public readonly id: string;
  public name: string;
  public price: number;
  public description: string;
  public image: string;
  public category: Category;
  public use: User;
  public readonly createdAt: number;
  public readonly updatedAt: number;

  constructor(props: Omit<Product, 'id'>) {
    Object.assign(this, props);
    if (!this.id) {
      this.id = v4();
    }
    if (!this.createdAt) {
      this.createdAt = Date.now();
    }
    if (!this.updatedAt) {
      this.updatedAt = Date.now();
    }
  }
}
