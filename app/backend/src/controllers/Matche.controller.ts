import { Request, Response } from 'express';
import MatcheService from '../services/Match.service';

export default class MatcheController {
  constructor(private matcheService = new MatcheService()) {}

  async getAllMatches(req: Request, res: Response) {
    const ServiceResponse = await this.matcheService.getAllMatches();

    return res.status(200).json(ServiceResponse.data);
  }
}
