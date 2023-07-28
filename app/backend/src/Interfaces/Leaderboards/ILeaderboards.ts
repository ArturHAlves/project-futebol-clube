import ITeams from '../ITeams';
import IMatches from '../Matches/IMatches';

export interface ILeaderboards {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  // goalsBalance: number;
  // efficiency: number;
}

export interface ITeamStatistics extends ITeams {
  matchesHome: IMatches[];
  matchesAway: IMatches[];
}
