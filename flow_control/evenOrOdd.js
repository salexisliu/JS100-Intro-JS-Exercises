function evenOrOdd(number) {

  if (Number.isInteger(number)) {
    if (number % 2 === 0) {
      console.log("even");
    }
    else {
      console.log("odd");
    }
  } else {
    console.log("not a number")
  }

}

evenOrOdd(100)
evenOrOdd(1)
evenOrOdd(13539369)
evenOrOdd("WHAT A GOOD DOG")