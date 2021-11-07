let r1Sync = require('readline-sync');
let number1 = Number(r1Sync.question('Enter the first number\n'));
let number2 = Number(r1Sync.question('Enter  the second number\n'))
let sum = number1 + number2

console.log(`the numbers ${number1} and ${number2} add to ${sum}`)