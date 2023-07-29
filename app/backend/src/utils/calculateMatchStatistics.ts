import { ITeamStatistics, ILeaderboards } from '../Interfaces/Leaderboards/ILeaderboards';

export default class calculateMatchStatistics implements ILeaderboards {
  public name: string;
  public totalPoints = 0;
  public totalGames = 0;
  public totalVictories = 0;
  public totalDraws = 0;
  public totalLosses = 0;
  public goalsFavor = 0;
  public goalsOwn = 0;
  public goalsBalance = 0;
  public efficiency = 0;

  constructor(private teamMatch: ITeamStatistics, private homeOrAway?: 'Home' | 'Away') {
    this.name = teamMatch.teamName;
    this.homeOrAway = homeOrAway;
    this.teamMatch = teamMatch;
    this.statisticsResult();
  }

  private getTotalGames() {
    if (this.homeOrAway) {
      this.totalGames = this.teamMatch[`matches${this.homeOrAway}`].length;
    } else {
      this.totalGames = this.teamMatch.matchesHome.length + this.teamMatch.matchesAway.length;
    }
  }

  private getTotalScore() {
    this.teamMatch.matchesHome.forEach((match) => {
      if (match.homeTeamGoals > match.awayTeamGoals) {
        this.totalVictories += 1;
      } else if (match.homeTeamGoals === match.awayTeamGoals) {
        this.totalDraws += 1;
      } else {
        this.totalLosses += 1;
      }
    });
  }

  private getTotalPoints() {
    this.totalPoints = (this.totalVictories * 3) + this.totalDraws;
  }

  private calculateGoals() {
    this.teamMatch.matchesHome.forEach((match) => {
      this.goalsFavor += match.homeTeamGoals;
      this.goalsOwn += match.awayTeamGoals;
      this.goalsBalance = this.goalsFavor - this.goalsOwn;
    });
  }

  private getEfficiency() {
    // [P / (J * 3)] * 100
    this.efficiency = parseFloat(((this.totalPoints / (3 * this.totalGames)) * 100).toFixed(2));
  }

  async statisticsResult() {
    this.getTotalGames();
    this.getTotalScore();
    this.getTotalPoints();
    this.calculateGoals();
    this.getEfficiency();
  }
}
