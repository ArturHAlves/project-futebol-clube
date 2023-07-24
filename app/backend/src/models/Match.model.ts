import IMatches from '../Interfaces/Matches/IMatches';
import IMatcheModel from '../Interfaces/Matches/IMatchModel';
import SequelizeMatch from '../database/models/SequelizeMatch';
import SequelizeTeam from '../database/models/SequelizeTeam';

export default class MatcheModel implements IMatcheModel {
  private model = SequelizeMatch;

  async findAll(progress?: string): Promise<IMatches[]> {
    const matches = {
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: SequelizeTeam, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    };

    if (progress) {
      return this.model.findAll({
        ...matches,
        where: { inProgress: progress === 'true' },
      });
    }
    return this.model.findAll(matches);
  }
}
