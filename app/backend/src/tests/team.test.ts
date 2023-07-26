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

  describe('GET /team', function () {
    it('devera retornar todos os times', async function () {
      sinon.stub(SequelizeTeam, 'findAll').resolves(teams as any);

      const { status, body } = await chai.request(app).get('/teams');

      expect(status).to.be.equal(200);
      expect(body).to.deep.equal(teams);
    });
  });

  describe('GET /team/:id', function () {
    it('devera retornar um time pelo id', async function () {
      sinon.stub(SequelizeTeam, 'findByPk').resolves(team as any);

      const { status, body } = await chai.request(app).get('/teams/1');

      expect(status).to.be.equal(200);
      expect(body).to.deep.equal(team);
    });

    it("devera retornar um 'Not found' se o time não existir", async function () {
      sinon.stub(SequelizeTeam, 'findByPk').resolves(null);

      const { status, body } = await chai.request(app).get('/teams/99');

      expect(status).to.be.equal(404);
      expect(body).to.deep.equal({ message: 'Team not found' });
    });
  });
});
