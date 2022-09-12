// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let count = 0;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!node) return null;

    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;

    this.head = this.head.next;
  }

  removeLast() {
    let node = this.head;
    if (!node) return;
    if (!node.next) return (this.head = null);

    let previousNode = node;

    while (node.next) {
      previousNode = node;
      node = node.next;
    }

    previousNode.next = null;
  }

  insertLast(data) {
    let last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === index) return node;

      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) return;

    let previousNode = this.getAt(index - 1);
    if (previousNode?.next) {
      previousNode.next = previousNode.next?.next || null;
    } else if (index === 0) {
      this.head = this.head.next;
    } else {
      return null;
    }
  }

  insertAt(data, index) {
    if (!this.head) {
      this.insertFirst(data);
    }

    if (index === 0 && this.head) {
      this.head = new Node(data, this.head);
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;

    while (node) {
      fn(node);
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
