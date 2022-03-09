import { ROLE } from '../utils/userRole';

declare module 'express' {
  export interface Request {
    user?: {
      id: string;
      name: string;
      email: string;
      role: ROLE;
    };
    files?: any;
  }
}
