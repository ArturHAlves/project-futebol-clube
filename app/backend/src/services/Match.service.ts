import MatcheModel from '../models/Match.model';
import IMatcheModel from '../Interfaces/Matches/IMatchModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import IMatches from '../Interfaces/Matches/IMatches';

export default class MatcheService {
  constructor(private matcheModel: IMatcheModel = new MatcheModel()) {}

  public async getAllMatches(progress?: string): Promise<ServiceResponse<IMatches[]>> {
    const allMatches = await this.matcheModel.findAll(progress);
    return { status: 'SUCESSFUL', data: allMatches };
  }
}
