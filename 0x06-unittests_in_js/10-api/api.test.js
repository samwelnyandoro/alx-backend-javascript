const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
  it('should return a status code of 200 when / is accessed', (done) => {
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

describe('Carts page', function() {
  it('should return a status code of 200 when /cart/id is accessed', (done) => {
    request.get('http://localhost:7865/cart/3', (err, res, body) => {
      expect(res).to.exist;
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message when /cart/id is accessed', (done) => {
    request.get('http://localhost:7865/cart/3', (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 3')
      done();
    });
  });

  it('should return a 404 status code when /cart/id is accessed if id is negative', (done) => {
    request.get('http://localhost:7865/cart/-4', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return a 404 status code when /cart/id is accessed if id is string', (done) => {
    request.get('http://localhost:7865/cart/Ayomide', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments page', function() {
  it('should return the correct status code when /available_payments is accessed', (done) => {
    request.get('http://127.0.0.1:7865/available_payments', (err, res, body) => {
      expect(res).to.exist;
      expect(res.statusCode).to.equal(200);
      if (err) expect(res.statusCode).to.not.equal(200);
      done()
    });
  });

  it('should return the correct object output when /available_payments is accessed', (done) => {
    const validPayments = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }
    request.get('http://127.0.0.1:7865/available_payments', (err, res, body) => {
      expect(JSON.parse(body)).to.deep.equal(validPayments);
      done()
    });
  });
});

describe('Login page', function() {
  it('should return the right status code and correct output when /login is accessed', (done) => {
    request.post('http://localhost:7865/login', {json: {userName: 'Ayomide'}}, (err, res, body) => {
      expect(res).to.exist;
      expect(res.statusCode).to.equal(200)
      if (err) expect(res.statusCode).to.not.equal(200);
      expect(body).to.be.equal('Welcome Ayomide');
      done()
    });
  });
});
