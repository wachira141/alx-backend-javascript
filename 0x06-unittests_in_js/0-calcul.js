/**
 *  Basic test with Mocha and Node assertion library
 *
 */

const calculateNumber = function (a, b) {
  // return the sum of the rounded numbers
  return Math.round(a) + Math.round(b);
};

module.exports = calculateNumber;
