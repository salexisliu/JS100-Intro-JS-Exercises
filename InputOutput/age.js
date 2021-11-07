let r1Sync = require('readline-sync');
let age = Number(r1Sync.question("How old are you? "))
console.log(`In 10 years, you will be ${age + 10} years old.`)