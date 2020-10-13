//Replacing 0's with 'e'
let billion = 1e9;
console.log( billion );

console.log( 2.334e9 );
let xyz = 5e-6;
console.log(xyz );

//Hexadecimal, binary and octal numbers
console.log(0xFF)
console.log(0b11111111)
console.log(0o377)

//conversion of number using toString()
let num=255
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2)); 

//Math Functions

//Rounding of numbers
let number=4.5
console.log(Math.floor(number))
console.log(Math.ceil(number))
console.log(Math.round(number))
console.log(Math.trunc(number))

console.log(Math.random())

console.log(Math.max(4,5,7,-2,0))
console.log(Math.min(4,5,7,-2,0))

console.log(Math.pow(2,4))