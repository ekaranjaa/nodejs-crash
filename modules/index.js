const { people, schools } = require('./people');

console.log(people);
console.log(schools);

// Importing OS - Used to get the device information
const os = require('os');
console.log(os.platform(), os.homedir(), os.hostname());
