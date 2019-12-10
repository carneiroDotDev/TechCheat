// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

function BubbleSort(arr){
    let less = 0
    for (let i = 0; i<arr.length; i++){
        for (let j = 0; j<(arr.length-1); j++){
            if(arr[j+1] < arr[j]){
                less = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = less
            }
        }
    }
    return arr
}

module.exports = BubbleSort;
