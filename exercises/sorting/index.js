// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// [5, 2, 4, 6, 1, 3]
const insertionSort = (arr) => {
  n = arr.length;
  let iKey = 0;

  for (i = 1; i < n; i++) {
    iKey = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > iKey) {
      arr[j + 1] = arr[j];
      j--;
      console.log("while loop", arr);
    }
    arr[j + 1] = iKey;
    console.log(arr);
  }

  return arr;
};

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = key;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
