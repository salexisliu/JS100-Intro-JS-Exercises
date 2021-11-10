//repeat

function repeat (n, string) {
  let repetitions = ''
  while (n > 0) {
    repetitions += string;
    n -= 1;
    console.log(repetitions);
  }
 return repetitions
}

console.log(repeat(3, 'ha'))