// Write a function that checks if a given string (case insensitive) is a palindrome.

// done during Vonds during their review session

function isPalindrome(x) {
    return x.toLowerCase() === x.split('').reverse().join('').toLowerCase()
}