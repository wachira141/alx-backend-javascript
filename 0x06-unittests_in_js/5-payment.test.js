/**
 * test module for 5-payment
 */
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestApi', function () {
  let spy;
  beforeEach(function () {
    if (!spy) {
      spy = sinon.spy(console);
    }
  });
  afterEach(function () {
    spy.log.resetHistory();
  });

  it('...', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.log.calledWith('The total is: 120')).to.be.true;
    expect(spy.log.calledOnce).to.be.true;
  });
  it('...', function () {
    sendPaymentRequestToApi(10, 10);
    expect(spy.log.calledWith('The total is: 20')).to.be.true;
    expect(spy.log.calledOnce).to.be.true;
  });
});
