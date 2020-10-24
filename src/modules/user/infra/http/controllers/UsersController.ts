import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/user/services/CreateUserService';

import ListAllUsersService from '@modules/user/services/ListAllUsersService';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createUser = container.resolve(CreateUserService);
    const { name, email, password } = request.body;

    const user = await createUser.execute({ name, email, password });

    return response.json(user);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listAllUsers = container.resolve(ListAllUsersService);
    const users = await listAllUsers.execute();
    return response.json(users);
  }
}
