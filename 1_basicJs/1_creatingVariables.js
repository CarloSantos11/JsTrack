//                  VARIABLES
// ------------------------------------------
// A variable simply holds data/information.
// We can create meaningful names for variables
// in order to make a formula or set of actions 
// read more easily for other developers.
// Ex.
// Pythagorean Theorem
// Which reads better?
// c^2 = a^2 + b^2;
//       or
// hypotenuseSquared = shortSideOne^2 + shortSideTwo^2; 
//
// There are three ways to make variables which we will demonstrate below

// ------------------ var KEYWORD ------------------
var myFirstVariable = 1;
// var is function scoped 
//  function(){} 

// Function scope meaning that the variable 
// is only accessbile within the function that it was created in.

// If the variable was not created in a function then this variable is global scoped
// Otherwise it is local to the function it was defined in.

// Variables declared with var do not have block scope. 
// Instead, they are scoped to the body of the containing 
// function no matter how deeply nested they are inside that 
// function.


// MORE ON SCOPE IN FILE - 3_scope.js

// ------------------ let KEYWORD ------------------
// ES2015 introduced two important new JavaScript keywords: let and const
// Before ES2015 the only way to create variables was with the var keyword.
let aBetterWayToCreateAVariables = 2;
// let is block scoped {}
// as opposed to being function scoped 
// let is the preferred way to declare modern variables

// ------------------ const KEYWORD ------------------
const aVarThatWillNotChange = 3.14;
// const is short for constant
// const will not be able to change 
// ------- UNCOMMENT THE FOLLOWING LINES AND RUN WITH NODE -----
// aVarThatWillNotChange = 3.15;
// console.log(aVarThatWillNotChange);
// -------------------------------------------------------------
