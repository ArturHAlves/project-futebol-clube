import { Request, Response, Router } from 'express';
import UserController from '../controllers/User.controller';
import validationsLogin from '../middlewares/validationsLogin';

const userController = new UserController();

const router = Router();

router.post('/', validationsLogin.validateLogin, (req: Request, res: Response) =>
  userController.loginUser(req, res));

export default router;
