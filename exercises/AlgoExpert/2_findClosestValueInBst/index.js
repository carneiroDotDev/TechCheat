function findClosestValueInBst(tree, target, diff = undefined, savedNode = undefined) {
  // Write your code here.
	console.log('Tree -', tree)
	if(tree.value === target){
		return tree.value
	}
	
	if(!diff || diff > Math.abs(tree.value - target)){
		diff = Math.abs(tree.value - target)
		savedNode = tree.value
	}
	
	if(tree.value > target){
			if(!tree.left) return savedNode
			findClosestValueInBst(tree.left, target, diff, savedNode)
		} else {
			if(!tree.right) return savedNode
			findClosestValueInBst(tree.right, target, diff, savedNode)
	} 
}

// Do not edit the line below.
