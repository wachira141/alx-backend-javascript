const calculateNumber = require('./0-calcul');
const assert = require('assert');
/**
 * contains a test suit for the file 0-calcul.js
 */

describe('calculateNumber', function () {
  describe('type === SUM', () => {
    it('...', function () {
      assert.equal(calculateNumber(1, 3), 4);
    });
  });
  describe('type === SUM', () => {
    it('...', function () {
      assert.equal(calculateNumber(1, 3.7), 5);
    }); 
  });
  describe('type === SUM', () => {
    it('...', function () {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    }); 
  });
});
