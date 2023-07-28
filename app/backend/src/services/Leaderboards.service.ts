import { ITeamStatistics } from '../Interfaces/Leaderboards/ILeaderboards';
import SequelizeTeam from '../database/models/SequelizeTeam';
import CalculateMatchStatistics from '../utils/calculateMatchStatistics';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class LeaderboardService {
  private teamModel = SequelizeTeam;

  private static resultCalculatorDoido = (teamMatch: unknown, homeOrAway?: 'Home' | 'Away') => {
    const {
      name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor, goalsOwn,
    } = new CalculateMatchStatistics(teamMatch as ITeamStatistics, homeOrAway);
    return {
      name,
      totalPoints,
      totalGames,
      totalVictories,
      totalDraws,
      totalLosses,
      goalsFavor,
      goalsOwn,
    };
  };

  // https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/
  public async leaderboards(): Promise<ServiceResponse<Partial<CalculateMatchStatistics>[]>> {
    const matches = await this.teamModel.findAll({
      include: [{ all: true, where: { inProgress: false } }],
    });

    const teams = matches.map((teamMatch) =>
      LeaderboardService.resultCalculatorDoido(teamMatch));

    return { status: 'SUCESSFUL', data: teams };
  }

  // https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/
  public async home(): Promise<ServiceResponse<Partial<CalculateMatchStatistics>[]>> {
    const matches = await this.teamModel.findAll({
      include: [{ all: true, where: { inProgress: false } }],
    });

    const teams = matches.map((teamMatch) =>
      LeaderboardService.resultCalculatorDoido(teamMatch, 'Home'));

    return { status: 'SUCESSFUL', data: teams };
  }

  // https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/
  public async away(): Promise<ServiceResponse<Partial<CalculateMatchStatistics>[]>> {
    const matches = await this.teamModel.findAll({
      include: [{ all: true, where: { inProgress: false } }],
    });

    const teams = matches.map((teamMatch) =>
      LeaderboardService.resultCalculatorDoido(teamMatch, 'Away'));

    return { status: 'SUCESSFUL', data: teams };
  }
}

// Agradeço ajuda dos meus amigos Anderson GR Turma 28 / Patrick Fonseca - Turma 28 / Maisa Dante - Turma 27
