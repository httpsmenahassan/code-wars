// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    const wordArray = s.split(' ')
    const sortedWordArr = wordArray.sort((a, b) => a.length - b.length)
    return sortedWordArr[0].length
}