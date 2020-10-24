import { inject, injectable } from 'tsyringe';
import Course from '../infra/typeorm/entities/Course';
import ICourseRepository from '../repositories/ICourseRepository';

@injectable()
class CreateCourseService {
  constructor(
    @inject('CoursesRepository')
    private courseRepository: ICourseRepository,
  ) {}

  public async execute(): Promise<Course[]> {
    const courses = await this.courseRepository.findAll();

    return courses;
  }
}

export default CreateCourseService;
