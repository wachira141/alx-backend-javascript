const calculateNumber = require('./0-calcul');
const assert = require('assert');
/**
 * contains a test suit for the file 0-calcul.js
 */

describe('calculateNumber', function () {
  it('...', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('...', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('...', function () {
    assert.equal(calculateNumber(1.5, 3.7), 5.2);
  });
});
