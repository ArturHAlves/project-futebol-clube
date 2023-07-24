import IMatches from './IMatches';

export default interface IMatcheModel {
  findAll(): Promise<IMatches[]>;
}
