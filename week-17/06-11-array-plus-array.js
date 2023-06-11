// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    const array1Sum = arr1.reduce((a, b) => a + b, 0)
    const array2Sum = arr2.reduce((a, b) => a + b, 0)
    return array1Sum + array2Sum;
}

// one line solution

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b, 0); //something went wrong
}