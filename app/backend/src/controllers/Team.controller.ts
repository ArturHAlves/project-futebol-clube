import { Request, Response } from 'express';
import TeamService from '../services/Team.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class TeamController {
  constructor(private teamService = new TeamService()) {}

  public async getAllteams(_req: Request, res: Response) {
    const ServiceResponse = await this.teamService.getAllTeams();
    return res.status(200).json(ServiceResponse.data);
  }

  public async getTeamById(req: Request, res: Response) {
    const { id } = req.params;
    const ServiceResponse = await this.teamService.getTeamById(+id);

    if (ServiceResponse.status !== 'SUCESSFUL') {
      return res.status(mapStatusHTTP(ServiceResponse.status)).json(ServiceResponse.data);
    }

    return res.status(200).json(ServiceResponse.data);
  }
}
