import { Request, Response, Router } from 'express';
import TeamController from '../controllers/Team.controller';

const teamController = new TeamController();

const router = Router();

router.get('/', (req: Request, res: Response) =>
  teamController.getAllteams(req, res));

router.get('/:id', (req: Request, res: Response) =>
  teamController.getTeamById(req, res));

export default router;
