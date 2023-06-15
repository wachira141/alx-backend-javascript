/**
 * Async tests with done
 * getPaymentTokenFromApi - Entry point
 * @success : boolen
 */

const getPaymentTokenFromApi = (success) => new Promise((resolve, reject) => {
  if (success) {
    resolve({ data: 'Successful response from the API' });
  }
});

module.exports = getPaymentTokenFromApi;
