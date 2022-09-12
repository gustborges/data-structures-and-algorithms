// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// SOLUTION 2: Recursive steps

const steps = (n, row = 0, str = "") => {
  if (row === n) {
    return;
  }

  if (str.length === n) {
    console.log(str);
    return steps(n, row + 1);
  }

  if (str.length <= row) {
    steps(n, row, str + "#");
  } else {
    steps(n, row, str + " ");
  }
};

// SOLUTION 1: Matrix (faster)
// you can think of it as a matrix with columns and rows with pounds and spaces
// it has n rows and n columns
// iterate through rows
// create an empty string that will receive the steps
// iterate through columns
// if column is equal to or less than the current row, add #
// otherwise add space
// console log the string

// function steps(n) {
//   for (rows = 0; rows < n; rows++) {
//     let str = "";
//     for (cols = 0; cols < n; cols++) {
//       str += cols <= rows ? "#" : " ";
//     }
//     console.log(str);
//   }
// }

module.exports = steps;
