import { Router } from 'express';
import teamsRouter from './teams.routes';
import userRouter from './user.routes';
import macheRouter from './match.routes';
import leaderboardRouter from './leaderboard.routes';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', userRouter);
router.use('/matches', macheRouter);
router.use('/leaderboard', leaderboardRouter);

export default router;
