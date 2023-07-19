import ITeams from '../ITeams';

export default interface ITeamModel {
  findAll(): Promise<ITeams[]>;
  findById(id: ITeams['id']): Promise<ITeams | null>
}
