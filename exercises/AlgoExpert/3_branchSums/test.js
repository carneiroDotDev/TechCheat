// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, sum = 0, answers = []) {
  if (!root) { return }
  sum += root.value
  if (!root.right && !root.left) {
    answers.push(sum)
    return answers
  }
  branchSums(root.left, sum, answers)
  branchSums(root.right, sum, answers)
  return answers
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;

const program = require('./program');
const chai = require('chai');

it('Test Case #1', function () {
  const tree = new BinaryTree(1);
  chai.expect(program.branchSums(tree)).to.deep.equal([1]);
});

it('Test Case #2', function () {
  const tree = new BinaryTree(1).insert([2]);
  chai.expect(program.branchSums(tree)).to.deep.equal([3]);
});

it('Test Case #3', function () {
  const tree = new BinaryTree(1).insert([2, 3]);
  chai.expect(program.branchSums(tree)).to.deep.equal([3, 4]);
});

it('Test Case #4', function () {
  const tree = new BinaryTree(1).insert([2, 3, 4, 5]);
  chai.expect(program.branchSums(tree)).to.deep.equal([7, 8, 4]);
});

it('Test Case #5', function () {
  const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  chai.expect(program.branchSums(tree)).to.deep.equal([15, 16, 18, 10, 11]);
});

it('Test Case #6', function () {
  const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1]);
  chai.expect(program.branchSums(tree)).to.deep.equal([15, 16, 18, 9, 11, 11, 11]);
});

it('Test Case #7', function () {
  const tree = new BinaryTree(0);
  tree.left = new BinaryTree(1);
  tree.left.left = new BinaryTree(10);
  tree.left.left.left = new BinaryTree(100);
  chai.expect(program.branchSums(tree)).to.deep.equal([111]);
});

it('Test Case #8', function () {
  const tree = new BinaryTree(0);
  tree.right = new BinaryTree(1);
  tree.right.right = new BinaryTree(10);
  tree.right.right.right = new BinaryTree(100);
  chai.expect(program.branchSums(tree)).to.deep.equal([111]);
});

it('Test Case #9', function () {
  const tree = new BinaryTree(0);
  tree.left = new BinaryTree(9);
  tree.right = new BinaryTree(1);
  tree.right.left = new BinaryTree(15);
  tree.right.right = new BinaryTree(10);
  tree.right.right.left = new BinaryTree(100);
  tree.right.right.right = new BinaryTree(200);
  chai.expect(program.branchSums(tree)).to.deep.equal([9, 16, 111, 211]);
});

class BinaryTree extends program.BinaryTree {
  constructor(value) {
    super(value);
  }

  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}