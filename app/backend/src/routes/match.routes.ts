import { Request, Response, Router } from 'express';
import MatcheController from '../controllers/Match.controller';

const matchesController = new MatcheController();

const router = Router();

router.get('/', (req: Request, res: Response) =>
  matchesController.getAllMatches(req, res));

export default router;
