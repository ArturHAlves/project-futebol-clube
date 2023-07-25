import { Request, Response } from 'express';
import MatcheService from '../services/Match.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatcheController {
  constructor(private matcheService = new MatcheService()) {}

  public async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;

    const ServiceResponse = await this.matcheService.getAllMatches(inProgress as string);
    return res.status(200).json(ServiceResponse.data);
  }

  public async finishMatch(req: Request, res: Response) {
    const { id } = req.params;

    const ServiceResponse = await this.matcheService.finishMatch(+id);

    if (ServiceResponse.status !== 'SUCESSFUL') {
      return res.status(mapStatusHTTP(ServiceResponse.status)).json(ServiceResponse.data);
    }

    return res.status(200).json(ServiceResponse.data);
  }
}
