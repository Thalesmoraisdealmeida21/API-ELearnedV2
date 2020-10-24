import { container } from 'tsyringe';

import IUsersRepository from '@modules/user/repositories/IUsersRepository';
import UsersRepository from '@modules/user/infra/typeorm/repositories/UsersRepository';

import ICourseRepository from '@modules/course/repositories/ICourseRepository';
import CourseRepository from '@modules/course/infra/typeorm/repositories/CourseRepository';

import IHashProvider from './providers/HashProvider/models/IHashProvider';
import HashProvider from './providers/HashProvider/implementation/HashProvider';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICourseRepository>(
  'CoursesRepository',
  CourseRepository,
);

container.registerSingleton<IHashProvider>('HashProvider', HashProvider);
