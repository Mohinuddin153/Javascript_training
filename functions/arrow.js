//simple arrow funcion
hello = () => {
  return "Hello World!";
}

//to find sum of 2 numbers
let sum = (a, b) => {
  let result = a + b;
  return result;
};
console.log(sum(1, 2));


// function without arrow
function sum(a, b) {
  return a + b + 100;
}
console.log(sum(2, 4))

// Arrow Function
sum = (a, b) => a + b + 100;
console.log(sum(4, 3))

// function without arrow and no arguments
var a = 4;
var b = 2;
function sum2() {
  return a + b + 100;
}
console.log(sum2())

// Arrow Function
var a = 4;
var b = 2;
sun2 = () => a + b + 100;
console.log(sun2())