import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Course from '../infra/typeorm/entities/Course';
import ICategoryRepository from '../repositories/ICategoryRepository';
import ICourseRepository from '../repositories/ICourseRepository';

interface IRequest {
  name: string;
  image: string;
  category: string;
}

@injectable()
class CreateCourseService {
  constructor(
    @inject('CoursesRepository')
    private courseRepository: ICourseRepository,

    @inject('CategoriesRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute({
    name,
    image,
    category,
  }: IRequest): Promise<Course | undefined> {
    if (!category) {
      throw new AppError('Category is missing');
    }
    let categExistent = await this.categoryRepository.findByName(category);

    if (!categExistent) {
      categExistent = await this.categoryRepository.create(category);
    }

    categExistent = await this.categoryRepository.findByName(category);

    if (!categExistent) {
      throw new AppError('Error Ocurred');
    }

    const course = await this.courseRepository.create({
      image,
      name,
      category: categExistent,
    });

    return course;
  }
}

export default CreateCourseService;
