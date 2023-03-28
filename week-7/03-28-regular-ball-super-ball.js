// Create a class Ball. 
// Ball objects should accept one argument for "ball type" when instantiated.
// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// worked on this with mentor Mark during community

class Ball {
  constructor(type) {
    console.log(type)
    if (type === undefined) {
      this.ballType = "regular"
    } else {
      this.ballType = type
    }
  }
}

// const b1 = new Ball()
// const b2 = new Ball("super")
// const b3 = new Ball("soccer")


class Ball {
  constructor(type) {
    if (!type) { //if there's no type then the type will be regular; same thing as (type === undefined)
      this.ballType = "regular"
    } else {
      this.ballType = type
    }
  }
}


