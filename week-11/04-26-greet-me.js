// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

const greet = function(name) {
    const lowercaseName = name.toLowerCase()
    return `Hello ${lowercaseName.charAt(0).toUpperCase()}${lowercaseName.slice(1)}!`
};