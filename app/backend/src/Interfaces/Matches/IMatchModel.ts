import IMatches from './IMatches';

export default interface IMatcheModel {
  findAll(inProgress?: string): Promise<IMatches[]>;
}