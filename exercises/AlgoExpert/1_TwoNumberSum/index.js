
// Optimal solution O(n), but O(n) because we are 
// using a hashtable (js object)
function twoNumberSum(array, targetSum) {
  // Write your code here.
  const obj = {}

  for (let num of array) {
    if (obj[targetSum - num]) {
      return [(targetSum - num), num]
    } else {
      obj[num] = true
    }
  }

  return []
}

twoNumberSum([3, 4, -4, 8, 11, 1, -1, -6], 10) // [ 11, -1 ]

// Not so performant O(n^2), but O(1) space because we are only:
// assigning variables. 
// function twoNumberSum(array, targetSum) {
//   // Write your code here.
// 	const answer = []
// 	for(let i =0; i<array.length; i++){
// 		for(let j=i+1; j<array.length; j++){
// 			if(array[i]+array[j] === targetSum){
// 				answer.push(array[i],array[j])
// 			}
// 		}
// 	}
// 	return answer
// }

// Do not edit the line below.

exports.twoNumberSum = twoNumberSum;
