import { inject, injectable } from 'tsyringe';
import Category from '../infra/typeorm/entities/Category';
import ICategoryRepository from '../repositories/ICategoryRepository';

@injectable()
class ListLessonsService {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute(): Promise<Category[]> {
    const categoriess = await this.categoryRepository.findAll();
    return categoriess;
  }
}

export default ListLessonsService;
