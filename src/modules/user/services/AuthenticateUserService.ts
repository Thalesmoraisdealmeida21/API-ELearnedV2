import AppError from '@shared/errors/AppError';
import IHashProvider from '@shared/infra/container/providers/HashProvider/models/IHashProvider';
import { inject, injectable } from 'tsyringe';
import jwt from 'jsonwebtoken';
import auth from '@config/auth';
import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/typeorm/entities/User';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const userExistent = await this.usersRepository.findByEmail(email);

    if (!userExistent) {
      throw new AppError('This user does not exist', 401);
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      userExistent.password,
    );

    if (!passwordMatched) {
      throw new AppError('This password is wrong ;(', 401);
    }

    const token = await jwt.sign({}, auth.token.secret || 'shhh', {
      subject: userExistent.id,
      expiresIn: auth.token.expireIn,
    });

    return {
      user: userExistent,
      token,
    };
  }
}

export default AuthenticateUserService;
