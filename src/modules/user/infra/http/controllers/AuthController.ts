import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AuthenticateUserService from '@modules/user/services/AuthenticateUserService';

export default class UserController {
  public async login(request: Request, response: Response): Promise<Response> {
    const authenticateUser = await container.resolve(AuthenticateUserService);
    const { email, password } = request.body;

    const authData = await authenticateUser.execute({ email, password });

    return response.json(authData);
  }
}
