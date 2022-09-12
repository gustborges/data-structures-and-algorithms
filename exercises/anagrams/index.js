// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// ANAGRAMS SOLUTION 1
// Objective: check if two strings have the same chars quantity.
// Clean both strings with regex, if needed.
// Iterate over each string to create two charMaps (objects with chars and the number of repetitions )
// Check if both charMaps have the same length. If not, return false.
// Iterate over each char in charMapA, checking if they are equal to charMapB[char].
// Return false if not equal and true otherwise.

// ANAGRAMS SOLUTION 2 (fastest)
// Objective: check if two strings have the same chars quantity.
// Clean both strings with regex, if needed.
// Iterate over each string to create two charLists (arrays with sorted chars)
// Check if they are equal to each other.

// SOLUTION 1

// function anagrams(stringA, stringB) {
//   const charMapA = generateCharMap(stringA);
//   const charMapB = generateCharMap(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }

//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//     return true;
//   }
// }

// const generateCharMap = (string) => {
//   const cleanString = string.replace(/\W/g, "").toLowerCase();
//   let charMap = {};

//   cleanString.split("").forEach((char) => {
//     charMap[char] = charMap[char] + 1 || 1;
//   });

//   return charMap;
// };

// SOLUTION 2

const anagrams = (stringA, stringB) => {
  const charListA = buildCharList(stringA).sort().join("");
  const charListB = buildCharList(stringB).sort().join("");

  return charListA === charListB;
};

const buildCharList = (str) => {
  const charList = [];
  const cleanString = str.replace(/[^\w]/g, "").toLowerCase();

  for (let char of cleanString.split("")) {
    charList.push(char);
  }
  return charList;
};

module.exports = anagrams;
