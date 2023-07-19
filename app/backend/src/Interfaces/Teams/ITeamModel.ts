import ITeams from '../ITeams';

export default interface ITeamModel {
  findAll(): Promise<ITeams[]>;
}
