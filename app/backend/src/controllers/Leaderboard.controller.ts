import { Request, Response } from 'express';
import LeaderboardService from '../services/Leaderboards.service';

export default class LeaderboardController {
  constructor(private leaderboardService = new LeaderboardService()) {}

  public async home(req: Request, res: Response) {
    const ServiceResponse = await this.leaderboardService.home();

    return res.status(200).json(ServiceResponse.data);
  }

  public async away(req: Request, res: Response) {
    const ServiceResponse = await this.leaderboardService.away();

    return res.status(200).json(ServiceResponse.data);
  }

  public async geral(req: Request, res: Response) {
    const ServiceResponse = await this.leaderboardService.leaderboards();

    return res.status(200).json(ServiceResponse.data);
  }
}
