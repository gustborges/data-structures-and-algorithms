// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// CAPITALIZE SOLUTION 1 (fastest)
// Split the string into words (array of words)
// Upcase [0] of each word
// Return the joined words separated by spaces

// CAPITALIZE SOLUTION 2
// Create an empty string
// Iterate through all the characters
// Upcase the first character
// Then upcase every character after a space
// Return the final string

// SOLUTION 1

function capitalize(str) {
  const wordList = [];
  for (let word of str.split(" ")) {
    wordList.push(word[0].toUpperCase() + word.slice(1));
  }

  return wordList.join(" ");
}

// SOLUTION 2
// function capitalize(str) {
//   let newStr = "";
//   let capitalizeNext = true;

//   for (let char of str) {
//     if (capitalizeNext) {
//       char = char.toUpperCase();
//       capitalizeNext = false;
//     }

//     if (char === " ") {
//       capitalizeNext = true;
//     }

//     newStr = newStr + char;
//   }

//   return newStr;
// }

module.exports = capitalize;
