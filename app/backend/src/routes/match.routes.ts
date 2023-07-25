import { Request, Response, Router } from 'express';
import MatcheController from '../controllers/Match.controller';
import authenticaded from '../middlewares/authenticated';

const matchesController = new MatcheController();

const router = Router();

router.get('/', (req: Request, res: Response) =>
  matchesController.getAllMatches(req, res));

router.patch(
  '/:id/finish',
  authenticaded.validateToken,
  (req: Request, res: Response) => matchesController.finishMatch(req, res),
);

export default router;
