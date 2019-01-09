const request = require('supertest');
const app = require('../../app');

const commonModule = require('../../lib/commonModule');

describe('同期テスト', () => {

  test('It should response the GET method', (done) => {
    request(app).get('/sync').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});