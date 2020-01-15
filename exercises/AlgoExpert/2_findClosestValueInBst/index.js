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

// exports.findClosestValueInBst = findClosestValueInBst;

function findClosestValueInBst(tree, target, savedNode = undefined) {
  let currentNode = tree
  while (currentNode) {
    if (currentNode.value === target) {
      return currentNode.value
    }

    if (!savedNode || Math.abs(savedNode - target) > Math.abs(currentNode.value - target)) {
      savedNode = currentNode.value
    }

    if (currentNode.value > target) {
      currentNode = currentNode.left
    } else {
      currentNode = currentNode.right
    }
  }
  return savedNode
}

exports.findClosestValueInBst = findClosestValueInBst;
