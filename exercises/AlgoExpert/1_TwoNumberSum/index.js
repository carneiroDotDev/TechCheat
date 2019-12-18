
function twoNumberSum(array, targetSum) {
  // Write your code here.
  const obj = {}
  const answer = []
  for (let num of array) {
    if (obj[targetsum - num]) {
      answer.push((targetsum - num), num)
    } else {
      obj[targetsum - num] = true
    }
  }
  return answer
}

// Not so performant O(n^2):
//
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
