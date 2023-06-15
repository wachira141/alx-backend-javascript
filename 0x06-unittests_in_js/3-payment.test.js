const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
/**
 * test the 3-payment using sinon.spy
 */

describe('sendPaymentRequestApi', function () {
  it('...', function () {
    const spy = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);

    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calculateNumber.callCount).to.be.equal(1);
    spy.calculateNumber.restore();
  });
});
