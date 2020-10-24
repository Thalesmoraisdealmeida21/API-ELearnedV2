import AppError from '@shared/errors/AppError';
import IHashProvider from '@shared/infra/container/providers/HashProvider/models/IHashProvider';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    name,
    email,
    password,
  }: IRequest): Promise<User | undefined> {
    const ExistingEmail = await this.usersRepository.findByEmail(email);
    const ExistingSameName = await this.usersRepository.findByName(name);

    if (ExistingEmail) {
      throw new AppError('There is already a user with this email');
    }

    if (ExistingSameName) {
      throw new AppError('There is already a user with this name');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
