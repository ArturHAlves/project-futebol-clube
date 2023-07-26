import IMatches from './IMatches';

export default interface IMatcheModel {
  findAll(inProgress?: string): Promise<IMatches[]>;

  findById(id: IMatches['id']): Promise<IMatches | null>;

  finishMatch(id: IMatches['id']): Promise<void>;

  updateScore(id: IMatches['id'], data: Partial<IMatches>): Promise<void>;
}
