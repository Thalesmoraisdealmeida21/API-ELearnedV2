import Category from '../infra/typeorm/entities/Category';

export default interface ICategoryRepository {
  findByName(name: string): Promise<Category | undefined>;
  create(name: string, icon?: string): Promise<Category>;
  findAll(): Promise<Category[]>;
}
