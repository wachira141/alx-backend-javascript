const calculateNumber = require('./1-calcul');
const assert = require('assert');

/**
 * combining desciptions
 */

describe('calculateNumber', function () {
  it('...', function () {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('...', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('...', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('...', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
