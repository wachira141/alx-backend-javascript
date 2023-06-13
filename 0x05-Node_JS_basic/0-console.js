/*
 * Exec basic js with nodejs
 *
 * displayMessage - main
 *
 * Return: print to the stdout
 */

const displayMessage = (argv) => {
  // write a message to the stdout
  process.stdout.write(argv + '\n');
  console.log(msg);
};

module.exports = displayMessage;
