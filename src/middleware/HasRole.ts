import { NextFunction, Request, Response } from 'express';
import { ROLE } from '../utils/userRole';

export function HasRole(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    if (request.user?.role !== ROLE.Admin) {
      throw new Error('You dont have permition.');
    }
    next();
  } catch (error: any) {
    return response.status(403).json({ error: error.message });
  }
}
