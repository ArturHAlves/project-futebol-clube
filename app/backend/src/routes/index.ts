import { Router } from 'express';
import teamsRouter from './teams.routes';
import userRouter from './user.routes';
import macheRouter from './matche.routes';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', userRouter);
router.use('/matches', macheRouter);

export default router;
