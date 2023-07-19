import { Request, Response } from 'express';
import TeamService from '../services/Team.service';

export default class TeamController {
  constructor(private teamService = new TeamService()) {}

  public async getAllteams(_req: Request, res: Response) {
    const ServiceResponse = await this.teamService.getAllTeams();
    return res.status(200).json(ServiceResponse.data);
  }
}
