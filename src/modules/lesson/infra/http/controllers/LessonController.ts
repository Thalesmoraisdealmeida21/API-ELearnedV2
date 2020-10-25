import CreateLessonService from '@modules/lesson/services/CreateLessonService';
import UpdateLesssonService from '@modules/lesson/services/UpdateLesssonService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class LessonController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, duration, courseId, description, video } = request.body;

    const createLesson = container.resolve(CreateLessonService);

    const lesson = await createLesson.execute({
      courseId,
      description,
      duration,
      name,
      video,
    });

    return response.json(lesson);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, duration, description, video } = request.body;
    const { id } = request.params;

    const updateLesson = container.resolve(UpdateLesssonService);

    const lesson = await updateLesson.execute({
      description,
      duration,
      id,
      name,
      video,
    });

    return response.json(lesson);
  }
}

export default LessonController;
