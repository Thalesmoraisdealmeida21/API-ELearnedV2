import ensureAuthenticate from '@modules/user/infra/http/middlewares/ensureAuthenticate';
import { Router } from 'express';
import CourseController from '../controllers/CourseController';
import CourseLessonController from '../controllers/CourseLessonController';

const courseController = new CourseController();
const courseLessonController = new CourseLessonController();

const courseRouter = Router();

courseRouter.post('/', ensureAuthenticate, courseController.create);
courseRouter.put('/:id', ensureAuthenticate, courseController.update);
courseRouter.get('/', ensureAuthenticate, courseController.index);

courseRouter.get('/:id/lessons', courseLessonController.index);

export default courseRouter;
