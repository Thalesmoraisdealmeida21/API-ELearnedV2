import { Router } from 'express';
import LessonController from '../controllers/LessonController';

const lessonRouter = Router();
const lessonController = new LessonController();

lessonRouter.post('/', lessonController.create);
lessonRouter.put('/:id', lessonController.update);

export default lessonRouter;
