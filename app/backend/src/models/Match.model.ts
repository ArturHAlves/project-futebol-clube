import IMatches from '../Interfaces/Matches/IMatches';
import IMatcheModel from '../Interfaces/Matches/IMatchModel';
import SequelizeMatch from '../database/models/SequelizeMatch';
import SequelizeTeam from '../database/models/SequelizeTeam';
import { NewEntity } from '../types/TNewEntity';

export default class MatcheModel implements IMatcheModel {
  private model = SequelizeMatch;

  public async findAll(progress?: string): Promise<IMatches[]> {
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

  public async findById(id: number): Promise<IMatches | null> {
    const match = await this.model.findByPk(id, {
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: SequelizeTeam, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return match;
  }

  public async finishMatch(id: number): Promise<void> {
    await this.model.update({ inProgress: false }, { where: { id } });
  }

  public async updateScore(id: number, data: Partial<NewEntity<IMatches>>): Promise<void> {
    await this.model.update(data, { where: { id } });
  }

  public async create(data: NewEntity<IMatches>): Promise<IMatches> {
    return this.model.create({ ...data, inProgress: true });
  }
}
