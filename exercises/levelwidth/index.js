// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// create lineCounters []
// create arr [root, 'd']
// while arr.length > 1
// if element === 'd', then add count to counter array, shift it and push it to the end of the array, restart count = 0
// get and remove first element with arr.shift();
// if it has children, push it to the end of the array

function levelWidth(root) {
  let queue = [root, "d"];
  let widthCounters = [];
  let count = 0;

  while (queue.length > 1) {
    let node = queue.shift();
    if (node.children) queue.push(...node.children);

    if (node === "d") {
      widthCounters.push(count);
      queue.push("d");
      count = 0;
    } else {
      count += 1;
    }
  }
  widthCounters.push(count);

  return widthCounters;
}

module.exports = levelWidth;
