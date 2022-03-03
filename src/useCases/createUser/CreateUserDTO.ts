import { ROLE } from '../../utils/userRole';

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  role: ROLE;
}
