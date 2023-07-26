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

const updateScore = [{ ...match, homeTeamGoals: 5, awayTeamGoals: 1 }];

const validBodyCreateMatch = {
  homeTeamId: 16,
  awayTeamId: 1,
  homeTeamGoals: 4,
  awayTeamGoals: 5,
};

const matchCreated = {
  id: 1,
  homeTeamId: 14,
  awayTeamId: 6,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
  inProgress: true,
};

const invalidBodyCreateMatch = {
  homeTeamId: 16,
  awayTeamId: 16,
  homeTeamGoals: 4,
  awayTeamGoals: 5,
};

const invalidBodyNoExistingTeam = {
  homeTeamId: 1600,
  awayTeamId: 16,
  homeTeamGoals: 4,
  awayTeamGoals: 5,
};


export {
  match,
  matches,
  matcheInProgress,
  finishedMatch,
  updateScore,
  validBodyCreateMatch,
  invalidBodyCreateMatch,
  invalidBodyNoExistingTeam,
  matchCreated,
};
