const match = {
  id: 6,
  homeTeamId: 5,
  homeTeamGoals: 1,
  awayTeamId: 13,
  awayTeamGoals: 1,
  inProgress: false,
  homeTeam: { teamName: 'Cruzeiro' },
  awayTeam: { teamName: 'Real Brasília' },
};

const matches = [match];

const matcheInProgress = [{ ...match, inProgress: true }];
const finishedMatch = [{ ...match, inProgress: false }];

export { match, matches, matcheInProgress, finishedMatch };
