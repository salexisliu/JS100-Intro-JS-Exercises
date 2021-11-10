let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// console.log(myArray.filter(num => num % 2 === 0))

// for (let i = 0; i < myArray.length; i += 1) {
//   let value = myArray[i];
//   if (value % 2 === 0) {
//     console.log (value)
//   }
// }

let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

//two nested arrays-- can use two for loops also
myArray2.forEach((nestedArray) => {
  nestedArray.forEach((value) => {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
});

// for (let i = 0; i < myArray2.length; i += 1) {
//   for (let j = 0; j < myArray2[i].length; j += 1) {
//     let value = myArray2[i][j];
//     if (value % 2 === 0) {
//       console.log("for loop", value);
//     }
//   }
// }

const newArray = myArray.map((value) => {
  if (value % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
});

console.log(newArray)
