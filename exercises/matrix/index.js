// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // Create empty arrays
  let results = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    results.push(arr);
  }

  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // Top row
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endRow] = counter;
      counter++;
    }
    endCol--;

    // Bottom row
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Left column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return results;
}

// check this solution

// const matrix = (n) => {
//   const spiral = Array(n)
//     .fill()
//     .map((_) => Array(n).fill(0));

//   let doingRow = true;
//   let increasing = true;
//   let row = 0;
//   let col = 0;

//   const findNextRow = () => (doingRow ? row : increasing ? row + 1 : row - 1);
//   const findNextCol = () => (doingRow ? (increasing ? col + 1 : col - 1) : col);

//   for (let i = 1; i <= n * n; i++) {
//     spiral[row][col] = i;
//     let nextRow = findNextRow();
//     let nextCol = findNextCol();
//     if (nextRow < n && nextCol < n && spiral[nextRow][nextCol] === 0) {
//       row = nextRow;
//       col = nextCol;
//     } else {
//       increasing = !doingRow ? !increasing : increasing;
//       doingRow = !doingRow;
//       row = findNextRow();
//       col = findNextCol();
//     }
//   }

//   return spiral;
// };

module.exports = matrix;
