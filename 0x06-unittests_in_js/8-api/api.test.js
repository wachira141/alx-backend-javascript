const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const url = 'http://localhost:7865';

  it('GET / returns the res from server', (done) => {
    request.get(`${url}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
