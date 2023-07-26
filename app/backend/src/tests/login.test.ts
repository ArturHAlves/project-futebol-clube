import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeUser from '../database/models/SequelizeUser';
import {
  invalidBody,
  userRegistered,
  validEmailInvalidPassword,
  validLoginBody,
  validPasswordInvalidEmail,
  validToken,
} from './mocks/Login.mocks';
import JWT from '../utils/JWT';
import validationsLogin from '../middlewares/validationsLogin';

chai.use(chaiHttp);

const { expect } = chai;

const { app } = new App();

describe('Test login', function () {
  afterEach(() => sinon.restore());

  describe('POST /login', function () {
    it('devera receber um token com dados validos', async function () {
      sinon.stub(SequelizeUser, 'findOne').resolves(userRegistered as any);
      sinon.stub(JWT, 'sign').resolves('token');
      sinon.stub(validationsLogin, 'validateLogin').resolves();

      const { status, body } = await chai
        .request(app)
        .post('/login')
        .send(validLoginBody);

      expect(status).to.be.equal(200);
      expect(body).to.have.key('token');
    });

    it('não devera fazer login com dados inválidos', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/login')
        .send(invalidBody);

      expect(status).to.be.equal(400);
      expect(body).to.deep.equal({ message: 'All fields must be filled' });
      expect(body).to.not.have.key('token');
    });

    it('não devera fazer login com "email" inválido', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/login')
        .send(validPasswordInvalidEmail);

      expect(status).to.be.equal(401);
      expect(body).to.deep.equal({ message: 'Invalid email or password' });
      expect(body).to.not.have.key('token');
    });

    it('não devera fazer login com "password" inválido', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/login')
        .send(validEmailInvalidPassword);

      expect(status).to.be.equal(401);
      expect(body).to.deep.equal({ message: 'Invalid email or password' });
      expect(body).to.not.have.key('token');
    });
  });

  describe('GET /login/role', function () {
    afterEach(() => sinon.restore());

    it('deverá retornar o role do user quando autenticado e com dados validos', async function () {
      const { status, body } = await chai
        .request(app)
        .get('/login/role')
        .set('Authorization', `Brearer ${validToken}`);

      expect(status).to.be.equal(200);
      expect(body).to.have.key('role');
    });

    it('não devera retornar o role do user quando não autenticado', async function () {
      const { status, body } = await chai.request(app).get('/login/role');

      expect(status).to.be.equal(401);
      expect(body).to.deep.equal({ message: 'Token not found' });
    });
  });
});
