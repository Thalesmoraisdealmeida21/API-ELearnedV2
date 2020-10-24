import { inject, injectable } from 'tsyringe';
import Course from '../infra/typeorm/entities/Course';
import ICourseRepository from '../repositories/ICourseRepository';

interface IRequest {
  name: string;
  image: string;
}

@injectable()
class CreateCourseService {
  constructor(
    @inject('CoursesRepository')
    private courseRepository: ICourseRepository,
  ) {}

  public async execute({ name, image }: IRequest): Promise<Course | undefined> {
    const course = await this.courseRepository.create({
      image,
      name,
    });

    return course;
  }
}

export default CreateCourseService;
