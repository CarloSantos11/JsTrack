// parameters are placeholders for the actual 
// values or arguments that will be passed into the function
//
// arguments are the actual values to be passed into a function


// IMPLEMENT YOUR CHANGES IN THIS FILE
// // A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
// A JavaScript function is a block of code designed to perform a particular task.
// in this case we use a key word for a function name "nameOfFunction" and put alert
// in curly bracket and call a function name to executed the code we put on the middel
function nameOfFunction(){ 
    alert("Hello World!");
}
// A JavaScript function is executed when "something" invokes it (calls it).
   nameOfFunction();


// function on adding numbers
function addingTwo(a,b) {
    return a+b;
}
console.log(addingTwo(15,15));

// function multiplay two numbers
function multiplayTwo(a,b) {
    return a*b;
}
console.log(multiplayTwo(15,15));

// function will do the same for dividing(/) and modules %

// example of return value
// Functions often compute a return value. The return value is "returned" back to the "caller":

var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
 