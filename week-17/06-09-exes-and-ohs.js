// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    const xArr = []
    const oArr = []

    const lowercaseStr = str.toLowerCase()
    for (let i = 0; i < lowercaseStr.length; i++) {
        if (lowercaseStr[i] === 'x') {
            xArr.push(i)
        } else if (lowercaseStr[i] === 'o') {
            oArr.push(i)
        }
    }
    if (xArr.length === oArr.length) {
        return true
    } else if (xArr.length === 0 && oArr.length === 0) {
        return true
    } else {
        return false
    }
}

// also including this quicker solution that I want to refer back to

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}