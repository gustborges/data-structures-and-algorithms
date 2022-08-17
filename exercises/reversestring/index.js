// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

reverse = (str) => str.split("").reduce((acc, char) => char + acc);

// reverse = (str) => {
//   return str.split("").reverse().join("");
// }

// reverse = (str) => {
//   reversed = "";

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// };

module.exports = reverse;
