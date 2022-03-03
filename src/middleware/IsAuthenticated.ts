import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { ROLE } from '../utils/userRole';

export function isAuthencicated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const token = request.headers.authorization?.split(' ')[1];
  try {
    if (!token) {
      throw new Error('You must login');
    }
    const user = verify(token, process.env.APP_SECRET_KEY);
    if (!user) {
      throw new Error('You must login');
    }

    request.user = <{ id: string; name: string; email: string; role: ROLE }>(
      user
    );
    next();
  } catch (error) {
    return response.status(401).json({ error: 'You must login' });
  }
}
