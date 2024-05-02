const sinon = require('sinon');
const Utils = require('./utils');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with the correct arguments', function() {
    const sinonStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const sinonSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    assert(sinonStub.calledWithExactly('SUM', 100, 20));
    assert(sinonSpy.calledWithExactly('The total is: 10'));

    sinonStub.restore();
    sinonSpy.restore();
  });
});
