import { Response, Request } from 'express';
import { AuthCase } from './AuthCase';

export class AuthController {
  constructor(private authCase: AuthCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;
    try {
      const token = await this.authCase.execute(email, password);
      return response.json({ token });
    } catch (error: any) {
      return response.status(401).json({
        error: error.message || 'Unexpectd error',
      });
    }
  }
}
