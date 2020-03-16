function productSum(array, depth = 1) {
    // Write your code here.
    let sum = 0
      for (let val of array){
          if(!val.length){
              sum += val
          } else {
              sum += (depth + 1) * productSum(val, depth+=1)
              depth=1
          }
      }
      console.log(sum)
      return sum
  }
  
  // Do not edit the line below.
  exports.productSum = productSum;

  productSum([[[[[5]]]]])


  