import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeMatch from '../database/models/SequelizeMatch';
import {
  matches,
  matcheInProgress,
  finishedMatch,
  updateScore,
} from './mocks/Match.mocks';
import { validToken } from './mocks/Login.mocks';

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

  describe('PATCH /matches/:id/finish', function () {
    it('devera atualizar uma partida colocando-a como finalizada', async function () {
      sinon.stub(SequelizeMatch, 'findByPk').resolves(matcheInProgress as any);
      sinon.stub(SequelizeMatch, 'update').resolves(finishedMatch as any);

      const { status, body } = await chai
        .request(app)
        .patch('/matches/6/finish')
        .set('Authorization', `Bearer ${validToken}`);

      expect(status).to.be.equal(200);
      expect(body).to.deep.equal({ message: 'Finished' });
    });

    it('devera retornar "Match not found", caso não encontre uma partida', async function () {
      sinon.stub(SequelizeMatch, 'findByPk').resolves(null);

      const { status, body } = await chai
        .request(app)
        .patch('/matches/6/finish')
        .set('Authorization', `Bearer ${validToken}`);

      expect(status).to.be.equal(404);
      expect(body).to.deep.equal({ message: 'Match not found' });
    });
  });

  describe('PATCH /matches/:id', function () {
    it('devera atualizar a pontuação da partida', async function () {
      sinon.stub(SequelizeMatch, 'findByPk').resolves(matcheInProgress as any);
      sinon.stub(SequelizeMatch, 'update').resolves(updateScore as any);

      const { status, body } = await chai
        .request(app)
        .patch('/matches/1')
        .set('Authorization', `Bearer ${validToken}`);

      expect(status).to.be.equal(200);
      expect(body).to.deep.equal({ message: 'Score updated' });
    });

    it('devera retornar "Match not found", caso não encontre uma partida', async function () {
      sinon.stub(SequelizeMatch, 'findByPk').resolves(null);

      const { status, body } = await chai
        .request(app)
        .patch('/matches/1')
        .set('Authorization', `Bearer ${validToken}`);

      expect(status).to.be.equal(404);
      expect(body).to.deep.equal({ message: 'Match not found' });
    });
  });
});
