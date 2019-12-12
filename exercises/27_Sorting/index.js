// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let less = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - 1); j++) {
            if (arr[j + 1] < arr[j]) {
                less = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = less
            }
        }
    }
    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j
            }
        }
        if (indexOfMin !== i) {
            let less = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = less
        }
    }
    return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
