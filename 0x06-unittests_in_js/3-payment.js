/**
 * sendPaymentRequestToApi - main function
 * @totalShipping :
 * @totalAmount
 *
 */

const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount,
  totalShipping) => {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
};
// sendPaymentRequestToApi(20, 30)
module.exports = sendPaymentRequestToApi;
