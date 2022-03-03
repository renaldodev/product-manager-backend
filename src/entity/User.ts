import { v4 } from 'uuid';
import { ROLE } from '../utils/userRole';
import { hashSync } from 'bcrypt';
export class User {
  public readonly id: string;
  public email: string;
  public name: string;
  public role: ROLE;
  public password: string;
  constructor(props: Omit<User, 'id'>) {
    Object.assign(this, props);
    if (!this.id) {
      this.id = v4();
    }
    if (this.password) {
      this.password = hashSync(this.password, 15);
    }
  }
}
