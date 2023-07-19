import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeTeam from '../database/models/SequelizeTeam';
import { team, teams } from './mocks/Team.mocks';

chai.use(chaiHttp);

const { expect } = chai;

const { app } = new App();

describe('Test Team', function () {
  afterEach(() => sinon.restore());

  it('should return all teams', async function () {
    // Arr
    sinon.stub(SequelizeTeam, 'findAll').resolves(teams as any);
    //Act
    const { status, body } = await chai.request(app).get('/teams');
    //Expect
    expect(status).to.be.equal(200);
    expect(body).to.deep.equal(teams);
  });

  it('should return a team by id', async function () {
    // Arr
    sinon.stub(SequelizeTeam, 'findByPk').resolves(team as any);
    // Act
    const { status, body } = await chai.request(app).get('/teams/1');
    // Expect
    expect(status).to.be.equal(200);
    expect(body).to.deep.equal(team);
  });

  it("should return not found if the team doesn't exists ", async function () {
    // Arr
    sinon.stub(SequelizeTeam, 'findByPk').resolves(null);
    // Act
    const { status, body } = await chai.request(app).get('/teams/99');
    // Expect
    expect(status).to.be.equal(404);
    expect(body).to.deep.equal({ message: 'Team not found' });
  });
});
