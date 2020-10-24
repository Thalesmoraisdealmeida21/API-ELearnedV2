import User from '../infra/typeorm/entities/User';
import CreateUserDTO from '../dtos/CreateUserDTO';

export default interface IUsersRepository {
  create(data: CreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findByName(name: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  save(userToSave: User): Promise<User | undefined>;
}
