import { Request, Response, Router } from 'express';
import UserController from '../controllers/User.controller';
import validationsLogin from '../middlewares/validationsLogin';
import authenticaded from '../middlewares/authenticated';

const userController = new UserController();

const router = Router();

router.post(
  '/',
  validationsLogin.validateLogin,
  // authenticaded.validateToken,
  (req: Request, res: Response) => userController.loginUser(req, res),
);

router.get(
  '/role',
  authenticaded.validateToken,
  (req: Request, res: Response) => UserController.loginRole(req, res),
);

export default router;
