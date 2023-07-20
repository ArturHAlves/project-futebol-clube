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

  it('devera retornar todos os times', async function () {
    // Arr
    sinon.stub(SequelizeTeam, 'findAll').resolves(teams as any);
    //Act
    const { status, body } = await chai.request(app).get('/teams');
    //Expect
    expect(status).to.be.equal(200);
    expect(body).to.deep.equal(teams);
  });

  it('devera retornar um time pelo id', async function () {
    // Arr
    sinon.stub(SequelizeTeam, 'findByPk').resolves(team as any);
    // Act
    const { status, body } = await chai.request(app).get('/teams/1');
    // Expect
    expect(status).to.be.equal(200);
    expect(body).to.deep.equal(team);
  });

  it("devera retornar um 'Not found' se o time não existir", async function () {
    // Arr
    sinon.stub(SequelizeTeam, 'findByPk').resolves(null);
    // Act
    const { status, body } = await chai.request(app).get('/teams/99');
    // Expect
    expect(status).to.be.equal(404);
    expect(body).to.deep.equal({ message: 'Team not found' });
  });
});
