// simple funcitons

function addTwoNumbers(x = 10, y = 10) {
  return x + y;
}

console.log(addTwoNumbers(3));

let addTwoNumbersArrow = (x, y) => {
  return x + y;
};

console.log(addTwoNumbersArrow(8, 7));
console.log(typeof addTwoNumbersArrow); // function

/*
This -> refers to an object

Normal Function:
In regular functions, this is dynamically scoped, meaning it is determined by how the function is called. \
The value of this inside a regular function depends on the context in which the function is executed.

Arrow Function:
Arrow functions do not have their own this context. They inherit the this value from the surrounding code. 
This means that the value of this inside an arrow function is the same as the value of this outside the function.

Normal Function:
Regular functions have their own arguments object, 
which is an array-like object containing all the arguments passed to the function.

Arrow Function:
Arrow functions do not have their own arguments object. 
If you need to access arguments, you should use rest parameters, like this: (…args) =>  function body 
*/

/*
Spread Operator (...):
The spread operator is used to expand elements of an array, 
object, or iterable (like a string) into individual elements.
 the spread operator is used to create a new array (newNumbers
*/

console.log(Math.min(8, 2, 9, 4));

let arr = [8, 2, 9, 4];
console.log(Math.min(...arr));

let spread = ["so", "much", "fun"];
let message = ["Javascript", "is", ...spread, "and", "very", "powerful"];
console.log(message);

let spreadClone = [...spread];
spread[1] = "more";
console.log(spread);
console.log(spreadClone);

/*
Rest Operator (...):
The rest operator is used to collect the remaining arguments or 
elements into a single array or object.
*/

function someFunction(param1, ...param2) {
  console.log(param1, param2);
}

someFunction("hi", "there", "!", "How are you?");

function addition(x, ...y) {
  return x + y;
}

console.log(addition(4, 5));
console.log(addition(4, 5, 6, 7, 8));

function additionRest(...myArgs) {
  let sum = 0;
  for (let i of myArgs) {
    sum += i;
  }
  return sum;
}
console.log(additionRest(5, 6));
console.log(additionRest(5, 6, 7));
console.log(additionRest(5, 6, 7, 8, 9));

// variable scope
// function testAvailability(x){
//     console.log("Available here : ",x);
// }
// testAvailability("Hi")
// console.log("Not available here: ",x);

// function testAvailability(x) {
//     let y = "Local variable!";
//     console.log("Available here:", y,x);
//   }

//   testAvailability("Hiii");
//   console.log("Not available here:", y,x);

// function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
//   }
//   let z = testAvailability();
//   console.log("Outside the function:", z);
// console.log("Not available here:", y);

// let vs var

function doingStuff() {
  if (true) {
    var x = "local";
    console.log(x);
  }
  console.log(x);
}

doingStuff();
// console.log(x);

function doingLetStuff() {
  if (true) {
    let x = "func";
    console.log(x);
  }
  // console.log(x);
}

doingLetStuff();

// Recursive Function

function printNum(nr) {
  if (nr == 0) return;
  if (nr != 0) {
    console.log(nr);
    printNum(--nr);
  }
}

printNum(4);

// Nested Functions
function doOuterFunctionsStuff(nr) {
  console.log("outer function");
  doInnerFunctionsStuff(nr);
  function doInnerFunctionsStuff(x) {
    console.log("Inner function arg x", x);
    console.log(x + 7);
    console.log("I can access outer variables:", nr);
  }
}

// doOuterFunctionsStuff(2)

function doOuterFunctionsStuff(nr) {
  doInnerFunctionsStuff(nr);
  function doInnerFunctionsStuff(x) {
    let z = 10;
  }
  // console.log("Not accessible", z);
}

// doOuterFunctionsStuff(2)

/*
 anonymousFunction is a variable that holds an anonymous function. 
 The function itself does not have a name.

Anonymous functions are often used as arguments to other functions, 
in event handlers, 

 function in JavaScript that does not have a name. Unlike named functions, anonymous functions are defined without an identifier. 
 They are typically used in situations where a function is used only once and does not need to be reused elsewhere in the code.

Using an Anonymous Function in setTimeout

setTimeout(function () {
    console.log("This runs after 2 seconds.");
}, 2000);
✅ The function inside setTimeout is anonymous because:
It has no name.It is not assigned to a variable.It executes only once after 2 seconds.
Comparison with Named Function If we use a named function instead:

function delayedMessage() {
    console.log("This runs after 2 seconds.");
}
setTimeout(delayedMessage, 2000);
✅ Here, delayedMessage is a named function, so it can be reused elsewhere.

*/

let anonymousAdd = function (x, y) {
  return x + y;
};

console.log(anonymousAdd(5, 4));

// Function callbacks
/*
Callbacks in JavaScript refer to functions that are passed as arguments to other functions and are executed after the completion of some asynchronous operation or a certain time period. 
Callbacks are essential for handling asynchronous tasks, such as reading files, making API calls, or handling user input events, where the result is not immediately available
*/
function doFlexibleStuff(executeStuff) {
  console.log("Inside doFlexibleStuffFunction: Before");
  executeStuff();
  console.log("Inside doFlexibleStuffFunction: After");
}

let anotherFunctionVariable = function () {
  console.log("another anonumous function implementation");
};

doFlexibleStuff(anotherFunctionVariable);

/*
Callbacks are particularly useful in scenarios where you want to ensure that a certain task is completed before moving on to the next task. 
They are commonly used in event handling, AJAX requests, and other asynchronous operations in JavaScript.

However, as JavaScript applications grow in complexity, nested callbacks can lead to a situation known as "callback hell," making the code hard to read and maintain. 
To mitigate this, techniques like Promises and async/await have been introduced to handle asynchronous operations in a more structured and readable manner.
*/

/*
Both setTimeout and setInterval are powerful tools for managing asynchronous tasks and controlling the flow of your JavaScript programs.
*/

let youGotThis = function () {
  console.log("you're doing really well, keep coding");
};

// setTimeout(youGotThis,2000)
// setInterval(youGotThis,1000)

//-----------------------------------------------------------------------------------------------------------------------

//Higher order functions 1.For Each, 2.Map 3.Filter 4.Reduce
/*
Higher-order functions are functions in JavaScript that can take other functions as arguments or return functions as their results. 
They are a fundamental concept in functional programming and enable powerful and flexible programming techniques. 
Higher-order functions allow you to abstract over actions, not just values, and can be used to create more readable and maintainable code
*/

/*
For each
The forEach() method in JavaScript is a higher-order function that allows you to iterate over the elements of an array and perform an action on each element
The forEach() method is useful when you want to perform an operation on each element of an array without creating a new array.
*/

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(myFunction);
function myFunction(item, index, ar) {
  return (ar[index] = item + 3);
}
console.log(arr);

arr.forEach((item, index, ar) => {
  return (ar[index] = item * 10);
});

console.log(arr);

/*
Map
The map() method in JavaScript is a higher-order function used to transform each element in an array by applying a function to it. 
It creates a new array with the results of calling the provided function on every element in the calling array.
*/

maparr = arr.map(myFunction);
console.log(maparr);
console.log(arr);

maparr = arr.map((x) => {
  return x ** 2;
});
console.log(maparr);
console.log(arr);

/*
Filter
The filter() method in JavaScript is another higher-order function that operates on arrays. 
It creates a new array by filtering out elements from an existing array based on a specified condition
*/
newarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
evenArr = newarr.filter((val) => {
  return val % 2 == 0;
});
console.log(evenArr);

oddArr = newarr.filter((val) => val % 2 != 0);
console.log(oddArr);

/*
reduce
The reduce() method in JavaScript is a higher-order function that applies a function against an accumulator and each element in an array (from left to right) to reduce it to a single value
*/

accsum = newarr.reduce((res, val) => res + val, 5);
console.log(accsum);

sum = newarr.reduce((a, b) => a + b);
console.log(sum);
console.log(newarr);
