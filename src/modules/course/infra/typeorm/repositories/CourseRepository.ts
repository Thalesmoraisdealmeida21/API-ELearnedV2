import ICourseRepository from '@modules/course/repositories/ICourseRepository';
import { getRepository, Like, Repository } from 'typeorm';
import ICreateCourseDTO from '../../../dtos/CreateCourseDTO';
import Course from '../entities/Course';

class CourseRepository implements ICourseRepository {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  public async create(
    createCourseDTO: ICreateCourseDTO,
  ): Promise<Course | undefined> {
    const course = this.ormRepository.create(createCourseDTO);

    await this.ormRepository.save(course);

    return course;
  }

  public async findAll(): Promise<Course[]> {
    const courses = await this.ormRepository.find();

    return courses;
  }

  public async search(name: string): Promise<Course[] | undefined> {
    const courses = this.ormRepository.find({
      where: {
        name: Like(name),
      },
    });

    return courses;
  }

  public async findById(id: string): Promise<Course | undefined> {
    const course = this.ormRepository.findOne(id);
    return course;
  }

  public async save(courseData: Course): Promise<void> {
    await this.ormRepository.save(courseData);
  }
}

export default CourseRepository;
