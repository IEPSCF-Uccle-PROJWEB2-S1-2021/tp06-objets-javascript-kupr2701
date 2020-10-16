function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;

  this.calcPerimeter = function () {
    let perimetre = 0;
    for (let i = 0; i < this.sides; ++i) {
      perimetre = perimetre + this.sideLength;
    }
    alert('the  perimeter of ' + this.name + ' is ' + perimetre + 'm');
  };
}

let square = new Shape('square', 4, 5);

console.log(square.calcPerimeter());


let triangle = new Shape('triangle', 3, 3);

console.log(triangle.calcPerimeter());
