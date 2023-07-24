import MatcheModel from '../models/Match.model';
import IMatcheModel from '../Interfaces/Matches/IMatchModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import IMatches from '../Interfaces/Matches/IMatches';

export default class MatcheService {
  constructor(private matcheModel: IMatcheModel = new MatcheModel()) {}

  async getAllMatches(): Promise<ServiceResponse<IMatches[]>> {
    const matches = await this.matcheModel.findAll();

    return { status: 'SUCESSFUL', data: matches };
  }
}
