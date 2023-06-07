// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
    const lowercaseStr = str.toLowerCase()
    for (let i = 0; i < lowercaseStr.length; i++) {
        for (let j = i + 1; j < lowercaseStr.length; j++) {
            if (lowercaseStr[i] === lowercaseStr[j]) {
                return false
            }
        }
    }
    return true
}