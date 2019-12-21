
// Solution with O(nlog n) due to array.sort() and 
// O(1) because we are only using array data structure
function twoNumberSum(array, targetSum) {
  array = array.sort(function (a, b) { return a - b })
  let left = 0
  let right = array.length - 1
  let currentSum = 0

  while (left < right) {
    currentSum = array[left] + array[right]
    if (currentSum === targetSum) {
      return [array[left], array[right]]
    } else if (currentSum < targetSum) {
      left += 1
    } else if (currentSum > targetSum) {
      right -= 1
    }
  }
  return []
}

// Optimal solution O(n), but O(n) because we are 
// using a hashtable (js object)
// function twoNumberSum(array, targetSum) {
//   const obj = {}

//   for (let num of array) {
//     if (obj[targetSum - num]) {
//       return [(targetSum - num), num]
//     } else {
//       obj[num] = true
//     }
//   }

//   return []
// }

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
