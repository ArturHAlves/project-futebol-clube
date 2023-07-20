import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeTeam from '../database/models/SequelizeTeam';
import { team, teams } from './mocks/Team.mocks';
import SequelizeUser from '../database/models/SequelizeUser';
import { invalidBody } from './mocks/Login.mocks';

chai.use(chaiHttp);

const { expect } = chai;

const { app } = new App();

describe('Test Login', function () {
  afterEach(() => sinon.restore());

  it('não devera fazer login com dados inválidos', async function () {
    const { status, body } = await chai.request(app).post('/login').send(invalidBody)

    expect(status).to.be.equal(400);
    expect(body).to.deep.equal({ message: 'All fields must be filled' })
  });
});
