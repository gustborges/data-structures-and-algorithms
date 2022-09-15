// Exercícios enviados por Gustavo

// 1. Responda se f = O(g) e g = O(f)
// a) f = O(g), g = Ω(f)
// b) f = Ω(g), g = O(f)
// c) f = O(g), g = Ω(f)
// d) f = Ω(g), g = O(f)

// 2. Merge (O(n))

const merge = (listA, listB) => {
  let listC = [];

  while (listA.length && listB.length) {
    if (listA[0] < listB[0]) {
      listC.push(listA.shift());
    } else {
      listC.push(listB.shift());
    }
  }

  if (listA.length === 0 && listB.length) {
    listC.push(...listB);
  }

  if (listB.length === 0 && listA.length) {
    listC.push(...listA);
  }

  return listC;
};

console.log(merge([1, 3, 5, 7], [2, 4, 6, 8]));

// 3. V = [ 4, 10, 3, 8, 5, 20, 16, 17 ] log selection sort inversions 0(nˆ2)

const selectionSort = (arr) => {
  let minIndex = 0;
  let minElement = arr[minIndex];

  for (let i = 0; i < arr.length; i++) {
    minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      minElement = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = minElement;
    }
  }

  return arr;
};

console.log(selectionSort([4, 10, 3, 8, 5, 20, 16, 17]));

// 4. V = [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]

// 5. Remove X from Linked List

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;
  }
}

const removeX = (list, x) => {
  let currentNode = list.head;

  while (currentNode.next) {
    if (currentNode.next.data === x) {
      console.log("currentNode.next:", currentNode.next);
      console.log("x:", x);
      currentNode.next = currentNode.next.next;
      console.log("currentNode.next:", currentNode.next);
    }
    currentNode = currentNode.next;
  }

  return list;
};

let node5 = new Node(5);
let node4 = new Node(4, node5);
let node3 = new Node(3, node4);
let node2 = new Node(2, node3);
let node1 = new Node(1, node2);
let list = new List();
list.head = node1;

list = removeX(list, 3);
console.log("list:", list);
console.log("list:", list.head);
console.log("list:", list.head.next);
console.log("list:", list.head.next.next);
console.log("list:", list.head.next.next.next);

// 6. Pilhas: P1 / V / P2
// P1 = [ E, G ] ==> topo G
// P2 = [C, D, F] ==> topo F
// V = [A, B, F]
