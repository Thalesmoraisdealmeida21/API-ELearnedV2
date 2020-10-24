import ensureAuthenticate from '@modules/user/infra/http/middlewares/ensureAuthenticate';
import { Router } from 'express';
import CourseController from '../controllers/CourseController';

const courseController = new CourseController();

const courseRouter = Router();

courseRouter.post('/', ensureAuthenticate, courseController.create);
courseRouter.put('/:id', ensureAuthenticate, courseController.update);
courseRouter.get('/', ensureAuthenticate, courseController.index);

export default courseRouter;
