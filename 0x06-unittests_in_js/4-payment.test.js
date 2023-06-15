const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
/**
 * test the 3-payment using sinon.spy
 */

describe('sendPaymentRequestApi', function () {
  it('...', function () {
    const spy = sinon.spy(console);
    const stubby = sinon.stub(Utils, 'calculateNumber');

    stubby.returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(stubby.calledWith('SUM', 100, 20)).to.be.true;
    expect(stubby.callCount).to.be.equal(1);
    expect(spy.log.calledWith('The total is: 10')).to.be.true;
    expect(spy.log.callCount).to.be.equal(1);
    stubby.restore();
    spy.log.restore();
  });
});
