// Triple greeting
for (let i = 0; i < 3; i += 1) {
  console.log("Aloha")
}
// Take two
for (let i =  1; i <= 100; i += 1) {
  console.log(i * 2)
}

// Looping over array elements
let array = [1, 2, 3, 4];
let index = 0;
while (index < array.length) { 
  console.log(array[index]);
  index += 1;
}

// Continue 

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) {
    continue; // line 26 is never executed because skip to next iteration
  }
  console.log("cities", cities[i].length);
}

//That's Odd
let num = 1 

while (num <= 40) {
  console.log(num)
  num += 2
}
  
  //Finding Nemo

  let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
  
  for (i = 0; i < fish.length; i += 1) {
    console.log(fish[i])
    if (fish[i] === 'Nemo') { 
      break;
  } 

  }

// for (let i = 0; i <= fish.indexOf("Nemo"); i++) console.log(fish[i]);