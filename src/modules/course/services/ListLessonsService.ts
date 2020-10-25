import Lesson from '@modules/lesson/infra/typeorm/entities/Lesson';
import ILessonsRepository from '@modules/lesson/repositories/ILessonsRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICourseRepository from '../repositories/ICourseRepository';

@injectable()
class ListLessonsService {
  constructor(
    @inject('LessonsRepository')
    private lessonsRepository: ILessonsRepository,

    @inject('CoursesRepository')
    private coursesRepository: ICourseRepository,
  ) {}

  public async execute(courseId: string): Promise<Lesson[]> {
    const course = await this.coursesRepository.findById(courseId);

    if (!course) {
      throw new AppError('Course not found');
    }

    const lessons = await this.lessonsRepository.findByCourse(courseId);

    if (lessons.length <= 0) {
      throw new AppError('This course dont have a lessons');
    }

    return lessons;
  }
}

export default ListLessonsService;
