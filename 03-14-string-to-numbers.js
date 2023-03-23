// Day 2 - We need a function that can transform a string into a number. What ways of achieving this do you know?
// Did this together with mentor Mark, Zen, Jessica, and Vonds
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

function stringToNumber(str) {
    return Number(str);
  }
  
 //cool kids way that Vonds introduced to me
  function stringToNumber(str) {
    return +str;
  }
  
  const stringToNumber = function(str){
    return Number(str);
  }
  
  function stringToNumber(str) {
    const result = Number(str)
    return result
  }
