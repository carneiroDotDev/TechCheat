function findClosestValueInBst(tree, target, savedNode = undefined) {
  if (tree.value === target) {
    return tree.value
  }

  if (!savedNode || Math.abs(savedNode - target) > Math.abs(tree.value - target)) {
    savedNode = tree.value
  }

  if (tree.value > target) {
    if (!tree.left) return savedNode
    return findClosestValueInBst(tree.left, target, savedNode)
  } else {
    if (!tree.right) return savedNode
    return findClosestValueInBst(tree.right, target, savedNode)
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;