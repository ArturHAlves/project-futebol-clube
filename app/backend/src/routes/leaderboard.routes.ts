import { Request, Response, Router } from 'express';
import LeaderboardController from '../controllers/Leaderboard.controller';

const leaderboardController = new LeaderboardController();

const router = Router();

router.get('/', (req: Request, res: Response) =>
  leaderboardController.geral(req, res));

router.get('/home', (req: Request, res: Response) =>
  leaderboardController.home(req, res));

router.get('/:away', (req: Request, res: Response) =>
  leaderboardController.away(req, res));

export default router;
