let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

function findIntegers(array) {

  return array.filter(val => Number.isInteger(val))
}


// Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log("Q6", oddLengths(arr)); // => [1, 5, 3]


 function oddLengths(strings) {
  const lengths = strings.map(letters => letters.length)
  const res = lengths.filter(value => value % 2 === 1)
  return res
 }

// 7 Use reduce to compute the sum of the squares of all of the numbers in an array:
let array7 = [3, 5, 7];

function sumOfSquares(arr) {
  let res = arr.reduce((accumulator, el) => { 
    return accumulator + el * el}, 0)
  return res
}

//REDO 8. Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.


// function oddLengths(strings) {
//   return strings.reduce((filteredNumbersArray, letters) => {
//     let length = letters.length;
//     if (length % 2 === 1) {
//       filteredNumbersArray.push(length);
//     }

//     return filteredNumbersArray;
//   }, []);
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr));


console.log("Q7", sumOfSquares(array7)); // => 83

// 9 .Without using a for, while, or do /while loop, write some code that checks whether the number 3 appears inside these arrays:

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

// function checkNum3(array) {
//   let check = array.filter(val => val === 3)
//   if (check[0] === 3) {
//     return "true"} else {return "false"}
// }

console.log("Q9", numbers2.includes(3))

let array10 = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

array10[1][3] = 606
console.log(array10)