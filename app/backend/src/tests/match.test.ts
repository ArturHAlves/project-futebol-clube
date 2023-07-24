import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeMatch from '../database/models/SequelizeMatch';
import { matches, matcheInProgress, finishedMatch } from './mocks/Match.mocks';

chai.use(chaiHttp);

const { expect } = chai;

const { app } = new App();

describe('Test Match', function () {
  afterEach(() => sinon.restore());

  describe('GET /matches', function () {
    it('devera retornar todas as partidas', async function () {
      sinon.stub(SequelizeMatch, 'findAll').resolves(matches as any);

      const { status, body } = await chai.request(app).get('/matches');

      expect(status).to.be.equal(200);
      expect(body).to.deep.equal(matches);
    });

    it('devera retornar todas as partidas em andamento', async function () {
      sinon.stub(SequelizeMatch, 'findAll').resolves(matcheInProgress as any);

      const { status, body } = await chai
        .request(app)
        .get('/matches?inProgress=true');

      expect(status).to.be.equal(200);
      expect(body).to.deep.equal(matcheInProgress);
    });

    it('devera retornar todas as partidas finalizadas', async function () {
      sinon.stub(SequelizeMatch, 'findAll').resolves(finishedMatch as any);

      const { status, body } = await chai
        .request(app)
        .get('/matches?inProgress=false');

      expect(status).to.be.equal(200);
      expect(body).to.deep.equal(finishedMatch);
    });
  });
});
