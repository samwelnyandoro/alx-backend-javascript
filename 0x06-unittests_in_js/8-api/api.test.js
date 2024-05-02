const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
  it('should return a status code of 200', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res).to.exist;
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message when / is accessed', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system')
      done();
    });
  });
});
