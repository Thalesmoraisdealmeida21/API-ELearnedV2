import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Lesson from '../infra/typeorm/entities/Lesson';
import ILessonsRepository from '../repositories/ILessonsRepository';

interface IRequest {
  id: string;
  name: string;
  description: string;
  video: string;
  duration: string;
}
@injectable()
class UpdateLessonService {
  constructor(
    @inject('LessonsRepository')
    private lessonRepository: ILessonsRepository,
  ) {}

  public async execute({
    id,
    video,
    name,
    duration,
    description,
  }: IRequest): Promise<Lesson> {
    const lesson = await this.lessonRepository.findById(id);

    if (!lesson) {
      throw new AppError('lesson not found');
    }

    lesson.video = video;
    lesson.name = name;
    lesson.duration = duration;
    lesson.description = description;

    await this.lessonRepository.save(lesson);

    return lesson;
  }
}

export default UpdateLessonService;
