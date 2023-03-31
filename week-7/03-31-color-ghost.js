// Create a class Ghost
// Ghost objects are instantiated without any arguments.
// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// worked with mentor Cory on this -- the test on the site isn't functional but my solution works


class Ghost {
    grabAColor() {
      const colors = ['white', 'yellow', 'purple', 'red']
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      return randomColor
    }
    constructor() {
      this.color = this.grabAColor()
    }
  }
  
  ghost = new Ghost();
  console.log(ghost.color) //=> "white" or "yellow" or "purple" or "red"






