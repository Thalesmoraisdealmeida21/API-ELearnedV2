import ICreateLessonDTO from '../dtos/CreateLessonDTO';
import Lesson from '../infra/typeorm/entities/Lesson';

export default interface ILessonsRepository {
  create(lesson: ICreateLessonDTO): Promise<Lesson>;
  save(lesson: Lesson): Promise<Lesson>;
  findById(id: string): Promise<Lesson | undefined>;
  findByCourse(courseId: string): Promise<Lesson[]>;
}
