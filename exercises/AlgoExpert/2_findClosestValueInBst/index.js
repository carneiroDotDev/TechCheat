function findClosestValueInBst(tree, target, diff = undefined) {
  // Write your code here.
  if (tree.value === target) {
    return tree.value
  }

  if (diff) {
    if (diff < Math.abs(tree.value - target)) {
      diff = Math.abs(tree.value - target)
    } else {
      return tree.value
    }
  } else {
    diff = Math.abs(tree.value - target)
  }

  if (tree.value < target) {
    findClosestValueInBst(tree.right, target, diff)
  }

  if (tree.value > target) {
    findClosestValueInBst(tree.left, target, diff)
  }
}
