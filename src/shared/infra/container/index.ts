import { container } from 'tsyringe';

import IUsersRepository from '@modules/user/repositories/IUsersRepository';
import UsersRepository from '@modules/user/infra/typeorm/repositories/UsersRepository';

import IHashProvider from './providers/HashProvider/models/IHashProvider';
import HashProvider from './providers/HashProvider/implementation/HashProvider';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IHashProvider>('HashProvider', HashProvider);
