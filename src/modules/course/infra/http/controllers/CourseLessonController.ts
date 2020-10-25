import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ListLessonsService from '@modules/course/services/ListLessonsService';

class CourseLessonController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listLessons = container.resolve(ListLessonsService);

    const lessons = await listLessons.execute(id);

    return response.json(lessons);
  }
}

export default CourseLessonController;
