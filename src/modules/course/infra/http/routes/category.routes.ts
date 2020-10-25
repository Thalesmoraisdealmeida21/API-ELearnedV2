import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';

const categoryController = new CategoryController();

const categoryRouter = Router();

categoryRouter.get('/', categoryController.index);

export default categoryRouter;
