// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

// worked through this with mentor Sam

String.prototype.toAlternatingCase = function () {
    const stringCharacters = this.split('')
    const newCharacters = stringCharacters.map(character => {
      if (character === character.toUpperCase()) {
        return character.toLowerCase()
      } else if (character === character.toLowerCase()) {
        return character.toUpperCase()
      } else {
        return character
      }
    })
    return newCharacters.join('')
  }