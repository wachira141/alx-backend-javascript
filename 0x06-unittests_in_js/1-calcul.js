/**
 *  Basic test with Mocha and Node assertion library
 * @type: the type of operand
 * @a: value of int
 * @b: value of int
 */

const calculateNumber = function (type, a, b) {
  // return the sum of the rounded numbers
  if (type === 'SUM') return Math.round(a) + Math.round(b);
  if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
  if (type === 'DIVIDE') {
    a = Math.round(a);
    b = Math.round(b);
    if (b === 0) return 'Error';
    return a / b;
  }
};

module.exports = calculateNumber;
