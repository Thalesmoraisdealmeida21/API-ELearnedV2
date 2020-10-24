import IUsersRepository from '@modules/user/repositories/IUsersRepository';
import CreateUserDTO from '@modules/user/dtos/CreateUserDTO';
import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(userData: CreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);
    await this.ormRepository.save(user);
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  public async findByName(name: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return user;
  }

  public async findAll(): Promise<User[]> {
    const users = await this.ormRepository.find();

    return users;
  }

  public async save(userToSave: User): Promise<User | undefined> {
    const user = await this.ormRepository.save(userToSave);

    return user;
  }
}

export default UsersRepository;
