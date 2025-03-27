// psuedocode
// identify lowest and highest numbers in the array using Math. methods
// return new array [lowest number, highest number]

function minMax(arr){
    const priceArr = []
    
    const highestNum = Math.min(...arr)
    const lowestNum = Math.max(...arr)
    
    const highArr = priceArr.push(highestNum)
    const lowArr = priceArr.push(lowestNum)
    return priceArr
}


// bubble sort solution (h/t to geeksforgeeks)
function minMax(arr){
    let n = arr.length
    const highLowArr = []
  
      // Traverse through all array elements
      for (let i = 0; i < n - 1; i++) {
      
          for (let j = 0; j < n - 1 - i; j++) {
              // Swap if element is greater than next index
              if (arr[j] > arr[j + 1]) {
                  [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              } 
          }
      }
    const highestNum = highLowArr.push(arr[0])
    const lowestNum = arr.pop()
    highLowArr.push(lowestNum)
    return highLowArr
}