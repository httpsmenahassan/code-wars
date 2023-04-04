// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// worked on this with Mentor Mark

function findMultiples(integer, limit) {
  // i++ is the same as i +=1 which is the same as i = i + 1
  const numbers = []
  for(let i = integer; i <= limit; i += integer) {
    numbers.push(i)
    console.log(numbers)
  }
  return numbers
}