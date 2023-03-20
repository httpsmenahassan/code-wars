// Day 4 -- did these with Vonds at their review session

// Complete the square sum function so that it squares each number passed into it and then sums the results together.


function squareSum(numbers){
    let sum = 0
    numbers.forEach(number => sum += number ** 2)
    return sum
}

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    const realSheep = []
    arrayOfSheep.forEach(sheep => {
      if(sheep) {
        return realSheep.push(sheep)
      }
    })
    return realSheep.length
}