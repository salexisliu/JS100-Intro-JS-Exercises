function numberRange(number) {
 if (number < 0) {
      console.log(`${number} is less than 0`)
 }
   else if (number <= 50) {
      console.log(`${number} betwween 0 and 50`)
   }
    else if (number <= 100) {
      console.log(`${number} between 51 and 100`)
    }
    else if (number > 100) {
      console.log(`${number} greater than 100`)
  }
}

numberRange(25)
numberRange(75)
numberRange(125)
numberRange(-25)