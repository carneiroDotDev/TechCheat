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
    if (arr.length === 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)

    const right = arr.slice(middle)
    const left = arr.slice(0, middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {

    const results = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }

    return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
