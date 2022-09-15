const Node = require("./node");
const validate = require("./index");

test("Validate recognizes a valid BST", () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);

  expect(validate(n)).toEqual(true);
});
/*

       10
      /  \
     5    15
    /      \
   0       20

*/

test("Validate recognizes an invalid BST", () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.left.left.right = new Node(999);

  expect(validate(n)).toEqual(false);
});

/*

       10
      /  \
     5    15
    /      \
   0       20
    \
    999
*/

test("Validate recognizes an invalid BST with left and right children", () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(9);
  n.insert(7);
  n.insert(4);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.left.right.right = new Node(999);

  expect(validate(n)).toEqual(false);
});

/*

       10
      /  \
     5    15
    / \    \
   4   9   20
  /   / \
 0   7   999


*/
