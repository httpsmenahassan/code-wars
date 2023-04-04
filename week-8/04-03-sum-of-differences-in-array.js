// Your task is to sum the differences between consecutive pairs in the array in descending order.
// In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

function sumOfDifferences(arr) {
    let sum = 0
    arr.sort((a, b) => b - a)
    for(let i = 0; i < arr.length - 1; i++) {
      let difference = arr[i+0] - arr[i+1]
      sum += difference
    }
    return sum 
  }