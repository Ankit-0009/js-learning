// Initization...
const score = 400;
console.log(score);

const balance = new Number(1002);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // Set number of zeroes after the number.

const anotherNumber = 120.8994;
console.log(anotherNumber.toPrecision(2)); // Study about the precision method for different values of numbers.

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // Set the commas to the number as per US number system.
console.log(hundreds.toLocaleString('en-IN')); // Now it set commas according to the INDIAN number system.



// **********************************************************************************
// Maths

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.9)); // It round off the number which is in decimal.
console.log(Math.ceil(4.9)); // It round off the number by its upper value.
console.log(Math.floor(4.9)); // It round off the number by its smaller value.
console.log(Math.max(3,4,5,6));
console.log(Math.min(3,4,5,6));

console.log(Math.random()); // It give any random number b/w (0 to 1).
console.log((Math.random()*10) + 1); // To avoid the number as 0.012344353. Therefore we added (1) to the expression.
console.log(Math.floor(Math.random()*10) + 1); // Floor method round off the number to its nearest smaller digit.


// Now if the question has give the range of numbers and we have to show the random number from that then there would a formula for that ....
const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);