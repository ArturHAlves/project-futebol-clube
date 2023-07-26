import MatcheModel from '../models/Match.model';
import IMatcheModel from '../Interfaces/Matches/IMatchModel';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';
import IMatches from '../Interfaces/Matches/IMatches';
import { NewEntity } from '../types/TNewEntity';

export default class MatcheService {
  constructor(private matcheModel: IMatcheModel = new MatcheModel()) {}

  public async getAllMatches(progress?: string): Promise<ServiceResponse<IMatches[]>> {
    const allMatches = await this.matcheModel.findAll(progress);
    return { status: 'SUCESSFUL', data: allMatches };
  }

  public async finishMatch(id: number): Promise<ServiceResponse<ServiceMessage>> {
    const matchFound = await this.matcheModel.findById(id);
    if (!matchFound) return { status: 'NOT_FOUND', data: { message: 'Match not found' } };

    await this.matcheModel.finishMatch(id);
    return { status: 'SUCESSFUL', data: { message: 'Finished' } };
  }

  public async updateScore(
    id: number,
    data: Partial<NewEntity<IMatches>>,
  ): Promise<ServiceResponse<ServiceMessage>> {
    const matchFound = await this.matcheModel.findById(id);
    if (!matchFound) return { status: 'NOT_FOUND', data: { message: 'Match not found' } };

    await this.matcheModel.updateScore(id, data);
    return { status: 'SUCESSFUL', data: { message: 'Score updated' } };
  }
}
