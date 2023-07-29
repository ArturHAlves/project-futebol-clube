import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import { leaderboardsAway, leaderboardsGeneral, leaderboardsHome } from './mocks/Leaderboard.mocks';

chai.use(chaiHttp);

const { expect } = chai;

const { app } = new App();

describe('Test Leaderboard', function () {
  afterEach(() => sinon.restore());

  describe('GET /leaderboard', function () {
    it('devera retornar todas as classificações gerais', async function () {
      const { status, body } = await chai.request(app).get('/leaderboard');

      expect(status).to.be.equal(200);
      expect(body).to.deep.equal(leaderboardsGeneral);
    });
  });

  describe('GET /leaderboard/home', function () {
    it('devera retornar todas as classificações mandantes', async function () {
      const { status, body } = await chai.request(app).get('/leaderboard/home');

      expect(status).to.be.equal(200);
      expect(body).to.deep.equal(leaderboardsHome);
    });
  });

  describe('GET /leaderboard/away', function () {
    it('devera retornar todas as classificações mandantes', async function () {
      const { status, body } = await chai.request(app).get('/leaderboard/away');

      expect(status).to.be.equal(200);
      expect(body).to.deep.equal(leaderboardsAway);
    });
  });
});
