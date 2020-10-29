/*
function makeTimer(doneMessage, n) {
  setTimeout(function() {
    console.log(doneMessage);
  }, n);

  doneMessage = "Changes";
}

makeTimer("Cookies are done!", 1000);
*/

//                MAGIC COUNTER
// ------------------------------------------------

function makeCounter() {
  let count = 0;

  function counter() {          // This is a nested function
    count = count + 1;          // when called will have access to a variable 
    return count;               // declared outside of the function in the makeCounter() function
  }

  return counter;
}

let doCount = makeCounter();    // retruns a reference to the counter() function.
console.log(doCount());         // doCount() calls the counter() method which will increment 
console.log(doCount());         // 'count' starting at 0 which was initalized outside of the counter function
console.log(doCount());         // our doCount has it's own local copy of count
console.log(doCount());

let doCount2 = makeCounter();    
console.log(doCount2());         

console.log('doCount:     ' + doCount());     // 2 different local variables with the same name of `count`
console.log('doCount2:    ' + doCount2());