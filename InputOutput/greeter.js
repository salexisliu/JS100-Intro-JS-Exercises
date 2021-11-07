let r1Sync = require('readline-sync');
let name = r1Sync.question("What is your name? ")
let last = r1Sync.question("What is your last name? ")
console.log(`Hello, ${name} ${last}!`)