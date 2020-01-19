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
