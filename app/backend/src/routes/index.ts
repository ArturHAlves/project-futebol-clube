import { Router } from 'express';
import teamsRouter from './teams.routes';
import userRouter from './user.routes';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', userRouter);

export default router;
