import { v4 } from 'uuid';
export class Category {
  public readonly id: string;
  public name: string;
  public description: string;
  public image: string;

  constructor(props: Omit<Category, 'id'>) {
    Object.assign(this, props);
    if (!this.id) {
      this.id = v4();
    }
  }
}
