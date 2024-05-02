const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log The total is: 120 to the console once', () => {
    sendPaymentRequestToApi(100, 20);
    assert(consoleLogSpy.calledOnceWith('The total is: 120'));
  });

  it('should log The total is: 20 to the console once', () => {
    sendPaymentRequestToApi(10, 10);
    assert(consoleLogSpy.calledOnceWith('The total is: 20'));
  });
});
