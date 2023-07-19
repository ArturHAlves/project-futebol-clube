import ITeams from '../Interfaces/ITeams';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import ITeamModel from '../Interfaces/Teams/ITeamModel';
import TeamModel from '../models/Team.model';

export default class TeamService {
  constructor(private teamModel: ITeamModel = new TeamModel()) {}

  public async getAllTeams(): Promise<ServiceResponse<ITeams[]>> {
    const allTeams = await this.teamModel.findAll();
    return { status: 'SUCESSFUL', data: allTeams };
  }
}
