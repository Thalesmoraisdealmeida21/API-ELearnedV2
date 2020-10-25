import ICourseRepository from '@modules/course/repositories/ICourseRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Lesson from '../infra/typeorm/entities/Lesson';
import ILessonsRepository from '../repositories/ILessonsRepository';

interface IRequest {
  name: string;
  duration: string;
  courseId: string;
  description: string;
  video: string;
}

@injectable()
class CreateLessonService {
  constructor(
    @inject('LessonsRepository')
    private lessonsRepository: ILessonsRepository,

    @inject('CoursesRepository')
    private coursesRepository: ICourseRepository,
  ) {}

  public async execute({
    name,
    duration,
    courseId,
    description,
    video,
  }: IRequest): Promise<Lesson> {
    const course = await this.coursesRepository.findById(courseId);

    if (!course) {
      throw new AppError('Course not found');
    }

    const lesson = this.lessonsRepository.create({
      courseId,
      description,
      duration,
      name,
      video,
    });

    return lesson;
  }
}

export default CreateLessonService;
