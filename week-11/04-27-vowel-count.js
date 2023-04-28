// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// worked with alum Jeff on this

function getCount(str) {
    const regex = /[aeiou]/g;
    const vowels = str.match(regex)

    if (vowels === null) {
        return 0
    } else {
        return vowels.length
    }
}