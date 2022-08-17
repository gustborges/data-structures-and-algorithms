// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // i = 0
  // arrayIndex = 0
  // iterate over the original array, add the next elements under the arrayIndex to a new array until i === size - 1
  // when i === size = 1, create a new array (arrayIndex + 1) and start adding those numbers to refresh i = 0 for the next iteration
  let superArray = [];
  let i = 0;
  for (let n of array) {
    if (i === 0) {
      let newArray = [];
      superArray.push(newArray);
    }
    superArray[superArray.length - 1].push(n);
    i + 1 === size ? (i = 0) : i++;
  }

  return superArray;
}

module.exports = chunk;
