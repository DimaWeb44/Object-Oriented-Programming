function Dog(name) {
  this.name = name;
  constructor:Dog
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog, // Solution

  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
