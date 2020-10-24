import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<User[] | undefined> {
    const users = await this.usersRepository.findAll();

    if (users.length <= 0) {
      throw new AppError('No users found');
    }
    return users;
  }
}

export default CreateUserService;
