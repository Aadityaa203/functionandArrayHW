// Create two global variables at the top of your app.js file.
var myNum1 = 10;
var myNum2 = 20;

// Create a function that returns the sum of two numbers that are arguments. Then console.log the function with the variables from step two as your two arguments.
function sum(myNum1, myNum2) {
  return myNum1 + myNum2;
}
console.log(sum(20, 8));

// Create a function that returns the difference of two numbers that are arguments. Then console.log the function with the variables from step two as your two arguments.
function difference(myNum1, myNum2) {
  return myNum1 - myNum2;
}
console.log(difference(10, 7));

// Create a function that returns two arguments multiplied by each other. Then console.log the function with the variables from step two as your two arguments.
function product(myNum1, myNum2) {
  return myNum1 * myNum2;
}
console.log(product(6, 2));

// Create a function that returns divides the first argument by the second argument and returns the new value. Then console.log the function with the variables from step two as your two arguments.
function quotient(myNum1, myNum2) {
  return myNum1 / myNum2;
}
console.log(quotient(16, 4));
