/*
* program to exec command line args
*
*/

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString().trim()}\n`);
  process.exit();
});

process.on('exit', (code) => {
  console.log('This important software is now closing');
});
