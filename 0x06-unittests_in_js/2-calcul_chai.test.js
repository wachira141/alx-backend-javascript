const calculateNumber = require('./1-calcul');
const assert = require('assert');
const { expect } = require('chai');

/**
 * combining desciptions
 */

describe('calculateNumber', function () {
  it('...', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6);
  });
  it('...', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
  });
  it('...', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2);
  });
  it('...', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('Error');
  });
});
