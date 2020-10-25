import ICreateLessonDTO from '@modules/lesson/dtos/CreateLessonDTO';
import ILessonsRepository from '@modules/lesson/repositories/ILessonsRepository';
import { getRepository, Repository } from 'typeorm';
import Lesson from '../entities/Lesson';

class LessonsRepository implements ILessonsRepository {
  private ormRepository: Repository<Lesson>;

  constructor() {
    this.ormRepository = getRepository(Lesson);
  }

  public async create(lessonData: ICreateLessonDTO): Promise<Lesson> {
    const lesson = this.ormRepository.create(lessonData);
    await this.ormRepository.save(lesson);

    return lesson;
  }

  public async save(lessonData: Lesson): Promise<Lesson> {
    const lesson = await this.ormRepository.save(lessonData);
    return lesson;
  }

  public async findById(id: string): Promise<Lesson | undefined> {
    const lesson = await this.ormRepository.findOne(id);

    return lesson;
  }

  public async findByCourse(courseId: string): Promise<Lesson[]> {
    const lessons = await this.ormRepository.find({
      where: {
        courseId,
      },
    });

    return lessons;
  }
}

export default LessonsRepository;
