// import ITeams from '../Interfaces/Teams/ITeamModel';
import SequelizeTeam from '../database/models/SequelizeTeam';
import ITeamModel from '../Interfaces/Teams/ITeamModel';
import ITeams from '../Interfaces/ITeams';

export default class TeamModel implements ITeamModel {
  private model = SequelizeTeam;

  async findAll(): Promise<ITeams[]> {
    const teams = await this.model.findAll();
    return teams.map(({ id, teamName }) => ({ id, teamName }));
  }

  async findById(id: number): Promise<ITeams | null> {
    const team = await this.model.findByPk(id);
    if (team == null) return null;

    const { teamName }: ITeams = team;
    return { id, teamName };
  }
}
