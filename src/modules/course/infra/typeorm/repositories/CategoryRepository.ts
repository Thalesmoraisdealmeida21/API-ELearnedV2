import ICategoryRepository from '@modules/course/repositories/ICategoryRepository';
import { getRepository, Repository } from 'typeorm';
import Category from '../entities/Category';

class CategoryRepository implements ICategoryRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async create(name: string, icon?: string): Promise<Category> {
    const category = this.ormRepository.create({
      name,
      icon,
    });

    await this.ormRepository.save(category);
    return category;
  }

  public async findByName(name: string): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return category;
  }

  public async findAll(): Promise<Category[]> {
    const categories = await this.ormRepository.find();
    return categories;
  }
}

export default CategoryRepository;
