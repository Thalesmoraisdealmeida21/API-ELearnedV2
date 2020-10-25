import ListCatoriesService from '@modules/course/services/ListCatoriesService';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

class CourseController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCategories = container.resolve(ListCatoriesService);

    const categories = await listCategories.execute();

    return response.json(categories);
  }
}

export default CourseController;
