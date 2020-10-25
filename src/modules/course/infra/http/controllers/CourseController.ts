import CreateCourseService from '@modules/course/services/CreateCourseService';
import UpdateCourseService from '@modules/course/services/UpdateCourseService';
import ListAllCourses from '@modules/course/services/ListAllCourses';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

class CourseController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, image, category } = request.body;

    const createCourse = container.resolve(CreateCourseService);

    const course = await createCourse.execute({ name, image, category });

    return response.json(course);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, image } = request.body;
    const { id } = request.params;

    const updateCourse = container.resolve(UpdateCourseService);

    const course = await updateCourse.execute({ id, name, image });

    return response.json(course);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listCourses = container.resolve(ListAllCourses);

    const courses = await listCourses.execute();

    return response.json(courses);
  }
}

export default CourseController;
