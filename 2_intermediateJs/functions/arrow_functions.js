
//                   ARROW FUNCTIONS
// -----------------------------------------------------

// ES6 - Ecmascript 6

// The arrow function simplifies syntax when passing a function into another function
// Another major difference between arrow functions and regular functions is how they treat the `this` keyword


// Below we have a list of traditional functions
// As well as their conversion to ES6 arrow function syntax


// ---------------------------------------
// function sumFunc(a,b) {
//   return a + b;
// }

// let sumFunc = (a,b) => {
//    return a + b;
// }

// console.log(sumFunc(1));
// ---------------------------------------

// function isPositive(number) {
//   return number >= 0;
// }

// let isPositive = number => number >= 0;

// console.log(isPositive(100));
// ---------------------------------------
// function randomNumber() {
//   return Math.random();
// }

// let randomNumber = () => Math.random();
// console.log(randomNumber());
// ---------------------------------------
document.addEventListener('click', () => console.log('Click'));



// https://www.youtube.com/watch?v=h33Srr5J9nY