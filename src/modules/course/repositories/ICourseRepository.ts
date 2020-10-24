import Course from '../infra/typeorm/entities/Course';
import ICreateCourseDTO from '../dtos/CreateCourseDTO';

export default interface ICourseRepository {
  create(createCourseDTO: ICreateCourseDTO): Promise<Course | undefined>;
  findAll(): Promise<Course[]>;
  search(name: string): Promise<Course[] | undefined>;
  findById(id: string): Promise<Course | undefined>;
  save(courseData: Course): Promise<void>;
}
