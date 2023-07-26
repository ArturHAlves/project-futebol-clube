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

const updateScore = [{ ...match, homeTeamGoals: 5, awayTeamGoals: 1 }]

export { match, matches, matcheInProgress, finishedMatch, updateScore };
