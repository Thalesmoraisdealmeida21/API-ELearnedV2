import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Course from '../infra/typeorm/entities/Course';
import ICourseRepository from '../repositories/ICourseRepository';

interface IRequest {
  id: string;
  name: string;
  image: string;
}

@injectable()
class CreateCourseService {
  constructor(
    @inject('CoursesRepository')
    private courseRepository: ICourseRepository,
  ) {}

  public async execute({
    id,
    name,
    image,
  }: IRequest): Promise<Course | undefined> {
    const course = await this.courseRepository.findById(id);

    if (!course) {
      throw new AppError('Course not found');
    }
    course.name = name;
    course.image = image;

    await this.courseRepository.save(course);

    return course;
  }
}

export default CreateCourseService;
