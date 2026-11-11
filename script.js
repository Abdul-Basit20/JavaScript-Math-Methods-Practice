// Math object : "Use for Mathematical Calculation"

// Math.round method: "Rounds a number to the nearest whole number. A decimal of .5 or higher goes up."
const number = 9.7;
console.log("Decimal is greater than 5: ",Math.round(number));

const num = 6.3;
console.log("Decimal is lessThan 5: ",Math.round(num));

console.log("value is negative: ",Math.round(-4.5));

// Math.floor method: "Always rounds down to the nearest smaller whole number"
const val = 5.7;
console.log("floor method: ",Math.floor(val));
console.log("negative in floor: ",Math.floor(-5.7));

// Math.ceil method: "Always rounds up to the nearest bigger whole number"
const bigNum = 6.3;
console.log("Ceil method: ",Math.ceil(bigNum));
console.log("negative in ceil: ",Math.ceil(-2.9));

// Math.trunc method: "Cuts off the decimal part and keeps only the whole part"
const quantity = 7.883707046;
console.log("trunc method: ",Math.trunc(quantity));
console.log("negative in trunc: ",Math.trunc(-10.288010485));

// Math.max method: "Returns the largest number from the numbers you give it"
console.log("Maximum value: ",Math.max(10,48,98,12,108,18,37));

// Math.min method: "Returns the smallest number from the numbers you give it"
console.log("Minimum value: ",Math.min(14,63,72,2,98,26));

// Use an array to find the minimum and maximum value of array
const marks = [90,52,38,15,37,62,78];
console.log("Smallest no: ",Math.min(...marks));
console.log("Largest no: ",Math.max(...marks));

// Math.abs method: "Returns the number without its negative sign, meaning its distance from zero"
const negativeNum = -80;
console.log("Absolute value: ",Math.abs(negativeNum));

// Math.sign method: "Tells you if a number is positive, negative, or zero. It returns 1, -1, or 0"
console.log("sign with positive: ",Math.sign(42));
console.log("sign with Zero: ",Math.sign(0));
console.log("sign with negative: ",Math.sign(-15));

// Math.pow method: "Multiplies a number by itself a given number of times"
console.log("Power of value: ",Math.pow(5, 3));

// Math.sqrt method: "Returns the square root, the number that multiplied by itself gives x"
const sq = 57;
console.log("Square root: ",Math.sqrt(sq));

// Math.random method: "Returns a random decimal number from 0 up to, but not including 1"
console.log("Random numbers b/w 0 to 1: ",Math.random());

// Create a random numbers from 0 to 9;
console.log("Random numbers from 0 to 9: ",Math.floor(Math.random() * 10));

// Make a ludo dice
function randomInt(min, max) {
  return Math.floor(Math.random() * (max-min+1)) + min;
}
console.log("Ludo Dice: ",randomInt(1, 6));


