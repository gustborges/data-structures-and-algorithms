// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// SOLUTION 1: iterate

// const pyramid = (n) => {
//   const totalCols = n * 2 - 1;
//   const midpoint = Math.floor(totalCols / 2);

//   for (let row = 0; row < n; row++) {
//     let str = "";

//     for (let col = 0; col < totalCols; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         str += "#";
//       } else {
//         str += " ";
//       }
//     }
//     console.log(str);
//   }
// };

// SOLUTION 2: recursion

const pyramid = (n, row = 0, str = "") => {
  const cols = n * 2 - 1;
  const midpoint = Math.floor(cols / 2);

  if (row === n) {
    return;
  }

  if (str.length === cols) {
    console.log(str);
    return pyramid(n, row + 1);
  }

  if (str.length <= midpoint + row && str.length >= midpoint - row) {
    str += "#";
  } else {
    str += " ";
  }
  pyramid(n, row, str);
};

module.exports = pyramid;
