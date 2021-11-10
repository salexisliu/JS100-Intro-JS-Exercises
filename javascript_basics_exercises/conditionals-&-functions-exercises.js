// yes? no? part 1
let randomNumber = Math.round(Math.random());
console.log(randomNumber);
randomNumber ? console.log("yes") : console.log("no")

// functions 1: three-way comparison

function compareByLength(word1, word2) {
  if (word1.length < word2.length) {
    return -1;
  } else if (word1.length > word2.length) { 
    return 1;
  } else {
    return 0
  }
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));

//locale pt 1 

// function extractLanguage(locale)  {
//   return locale.slice(0, 2)
// }

function extractLanguage(locale) {
  return locale.split('_')[0]

}
console.log(extractLanguage('en_US.UTF-8'));  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

// local greet

function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
    default: return 'not valid';
  }
}

function localGreet(locale) {
  let languageCode = extractLanguage(locale)
  return greet(languageCode)
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
