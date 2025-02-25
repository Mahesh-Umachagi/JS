// Variable Types -> Let,Var,Const
// Operators -> Arithmetic, Inc/Dec, Logical, Relational, Equals, Condional ?

// let singleString = "Hi There!";
// console.log(singleString);
// console.log(typeof singleString);

// let doubleString = "How are you?"
// console.log(doubleString);

// null -> typeof Object, undefined-> type of Undefined
// let num = undefined;
// console.log(num);
// console.log(typeof num);

// let language = "Javascript"
// const message = `Let's learn ${language}`
// console.log(message);

// message = "new message"
// console.log(message);

// const int = 5;
// console.log(int);

// let number;
// console.log(number); // undefined

// let nr1 = 2;
// let nr2 = "2"
// let nr3 = "3"
// console.log(nr1-nr2);
// console.log(nr1+nr3);

/*
It's a behaviour of JS
In the context of mathematical operations, 
JavaScript will attempt to perform implicit type conversion (also known as type coercion) to ensure that the operation can be completed. For example, when you use the - operator between a number and a string representing a number, JavaScript will attempt to convert the string to a number before performing the subtraction.

Similarly, when you use the + operator with strings, JavaScript performs concatenation if at least one of the operands is a string. This behavior can be convenient in some cases, but it can also lead to unexpected results if you're not careful with types and operations.

To handle these situations more explicitly and avoid unexpected type conversions, you can use functions like parseInt() or parseFloat() to convert strings to numbers before performing mathematical operations. Additionally, you can use the === (strict equality) operator to compare values without performing type coercion
*/

// let nr1 = 20;
// let nr2 = 4;
// let str1 = "Hi"
// let nr3 = 3;
// let result1 = nr1 - nr2
// let result2 = str1-nr3 //NaN
// let result3 = nr3-str1 // Nan
// console.log(result1,result2,result3);

// let str3 = "Hello"
// let str2 = " addition"
// let result4 = str3+str2
// let result5 = str3/str2 // Nan
// console.log(result4,result5);

// let nr3 = 8;
// let nr4 = 2;
// let nr5 = false; // flase-0->Nan, true-1->0
// let nr6 = 1;
// let result6 = nr3%nr4;
// let result7 = nr3/nr4;
// let result8 = nr3%nr5;
// let result9 = nr3%nr6;
// console.log(`${nr3}%${nr4} = ${result6}`);
// console.log(`${nr3}/${nr4} = ${result7}`);
// console.log(`${nr3}/${nr5} = ${result8}`);
// console.log(`${nr3}/${nr6} = ${result9}`); //0
// console.log(typeof nr5);

// let nr = 2;
// console.log(nr++);
// console.log(nr);

// operators precedence order
// 1. Grouping:()
// 2. Exponentiation
// 3. unary
// 4. mul, div, mod
// 5. add, sub,

// let nr1 = 4;
// let nr2 = 5;
// let nr3 = 2;
// console.log(nr1++ + ++nr2 * nr3++);//16

// let x = 3;
// x **= 4;
// console.log(x);

// let x = 5;
// let y = "5";
// console.log(x==y);
// console.log(x===y);

// let x = 5;
// let y = "6"
// console.log(y>x);

// let x="Shrik"
// let y="Shrik"
// console.log(y>x);

// let x = 1;
// let y = 2;
// let z = 3;

// console.log(x < y && y < z);
// console.log(x > y && y < z);
// console.log(x > y || y < z);
// console.log(x > y || y > z);
// console.log(!(x < y));

// let age = 16;

// if(age<18){
//     console.log("No underage");
// }else{
//     console.log("Welcome");
// }

// if(age<3){
//     console.log("Free Pass");
// }else if(age >= 3 && age < 12){
//     console.log("Discount in Fees");
// }else if(age>=12 && age < 65){
//     console.log("Full Fees");
// }else{
//     console.log("Discount in fees as seniors");
// }

// let acess = age < 18 ? "denined" : "allowed"
// console.log(acess);

// -------------------------------------------------------------------------------------------------------------

// for(let i=0;i<10;i++){
//     console.log(i);
// }

// let arr = [];
// for (let i = 0; i < 100; i++) {
//   arr.push(i);
// }

// console.log(arr);

// let arr2 = []
// for(let i=0;i<100;i+=2){
//     arr2.push(i)
// }

// console.log(arr2);

// let arrofArrays = [];
// for (let i = 0; i < 3; i++) {
//   arrofArrays.push([]);
//   for (let j = 0; j < 7; j++) {
//     arrofArrays[i].push(j);
//   }
// }

// console.log(arrofArrays);

// let names = ["Chantal","John","maxime","bobbi","jair"]
// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
// }
// //The for...of loop is used to iterate over the values of an iterable object,
// // such as arrays, strings, sets, maps, etc
// for(let name of names){
//     console.log(name);
// }

// for(let i=0;i<names.length;i++){
//     names[i] = "hello"+names[i]
// }

// console.log(names);
// let car = {
//     model : "Golf",
//     make:"Volkswagen",
//     year:1999,
//     color:"black"
// }

//The for...in loop is used to iterate over the enumerable properties of an object.
//It works with objects and can be used to iterate over the keys (property names) of an object.
// for(let prop in car){
//     console.log(prop,car[prop]);
// }

// just keys
// for(let prop in car){
//     console.log(prop);
// }

// keys in array
// let keys = Object.keys(car)
// console.log(keys);

// values
// for(let val of Object.values(car)){
//     console.log(val);
// }

// keys : values
// let arr = Object.keys(car)
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]+" : "+car[arr[i]]);
// }

// {key:values}
// console.log(car);

//[[key,value][key,value]]
// console.log(Object.entries(car));

//---------------------------------------------------------------------------------------------------------------------

// console.log("Hello World");

// let age = 25;
// const name = "mahesh";
// console.log(`${name}'s age is ${age}`);

// let res = null
// console.log(res);

// let person = {
//     "fistname":"Bruce",
//     "lastname":"Wayne",
//     "age":30
// }

// console.log(person.fistname);

// const oddnumber = [1,3,5,7,9]
// console.log(oddnumber[3]);

// let x = 10
// let y = -2
// console.log(x!=y);
// console.log(x>0 || y>0);
// console.log("Bruce "+"Wayne");

// const isEven = 10%2 === 0 ? "Number is even" : "Number is odd"
// console.log(isEven);
// console.log('2'+'3');
// console.log('4'-'2');

// console.log(Number(false));
// console.log(parseFloat('5.23'));
// console.log(String(true));
// console.log((500).toString());
// console.log(Boolean(''));

// let a = 2;
// let b = '2';

// console.log(a==b);
// console.log(a===b);

// const num = 0;
// if(num>0){
//     console.log("Number is positive");
// }else if(num==0){
//     console.log("Number is zero");
// }else{
//     console.log("Number is negative");
// }

// const color = "gree";

// switch(color){
//     case 'red':
//         console.log("color is red");
//         break

//     case 'blue':
//         console.log("color is blue");
//         break

//     case 'green':
//         console.log("Color is green");
//         break

//     default :
//         console.log("not a valid color");
// }

// for(let i=0;i<5;i++){
//     console.log("Hello world "+i);
// }

let num = 5;
// while (num != 0) {
//   console.log("Hello world " + num);
//   num--;
// }

// do {
//   console.log("Hello world in do-while " + num);
//   num--;
// } while (num != 0);

// let arr = [1,2,3,4,5,6,7,8];
// for(let i of arr){
//     console.log(i);
// }

// function greet(username){
//     console.log(`Hii ${username}`);
// }
// greet('mahesh')

// function add(a,b){
//     return a+b
// }

// let sum = add(10,5);

// console.log(sum);

// const sum =(a,b) => {
//     return a+b;
// }

// console.log(sum(25,25));

//-------------------------------------------------------------------------------------------------------------------
//Advance JS
// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();

// closure => when we return func from another func, we are returning a combination of func definition and functions scope
//func defn have some memory with some live data between execution, the combination of func and its scope chain is called closure
// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   inner();
// }
// outer();
// outer();

/*
Great example of closure and hoisting
function outerfunc(){
        let a = 10;
        return sum
        function sum(b){
            return a+b
        }

}

result = outerfunc()
result(5)


*/

// clousre is created when we return func from another func
//innerFunction accesses outerVariable from its lexical scope, even though the outerFunction scope has already exited.
// inner function has access to variables in the outer function scope even after outer function has finished execution
// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }
// const fn = outer();
// fn();
// fn();

//function currying
// is a process in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time
// fun f(a,b,c) => f(a)(b)(c)

// function sum(a,b,c){
//     return a+b+c
// }
// // console.log(sum(2,3,4));

// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c)
//             }
//         }
//     }
// }
// const csum = curry(sum)
// console.log(csum(2)(3)(4));

//this -> refers to the object it belongs to

//prototype -> every function has a property prototype that points to the object, which we can determine all sharable properties
// use of prototype is to share properties and methods across intances
// function Person(fname,lname){
//     this.firstname = fname
//     this.lastname = lname
// }

// const person1 = new Person('Bruce','wayne')

// Person.prototype.getFullName = function(){
//     return this.firstname+" "+this.lastname
// }

// console.log(person1.getFullName());

//prototype inheritance
// function Person(fname, lname) {
//   this.firstname = fname;
//   this.lastname = lname;
// }
// Person.prototype.getFullName = function () {
//   return this.firstname + " " + this.lastname;
// };
// function SuperHero() {
//   this.SuperHero = true;
// }
// SuperHero.prototype.fightCrime = function () {
//   console.log("Fighting crime");
// };

/* 

Closure and Intro to Higher-Order Functions by Leetcode
Overview

This question is intended as an introduction to JavaScript functions. This editorial will cover their syntax and topics like closures and higher-order functions.

If you are new to JavaScript, it is recommended you follow along with the code examples. You can do this by pasting code into the LeetCode playground.

An awesome thing about JavaScript is your browser has a built-in execution environment. You can read more on how to execute code within your browser (and view a website's code) here.
Function Syntax

In JavaScript, there are two main ways to declare a function. One of which is to use the function keyword.
Basic Syntax

The syntax is:

function f(a, b) {
    const sum = a + b;
    return sum;
}
console.log(f(3, 4)); // 7

In this example, f is the name of the function. (a, b) are the arguments. You can write any logic in the body and finally return a result. You are allowed to return nothing, and it will instead implicitly return undefined.
Anonymous Function

You can optionally exclude the name of the function after the function keyword.

var f = function(a, b) {
    const sum = a + b;
    return sum;
}
console.log(f(3, 4)); // 7

Immediately Invoked Function Expression (IIFE)

You can create a function and immediately execute it in Javascript.

const result = (function(a, b) {
    const sum = a + b;
    return sum;
})(3, 4);
console.log(result); // 7

Why would you write code like this? It gives you the opportunity to encapsulate a variable within a new scope. For example, another developer can immediately see that sum can't be used anywhere outside the function body.
Functions Within Functions

A powerful feature of JavaScript is you can actually create functions within other functions and even return them!

function createFunction() {
    function f(a, b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createFunction();
console.log(f(3, 4)); // 7

In this example, createFunction() returns a new function. Then that function can be used as normal.
Function Hoisting

JavaScript has a feature called hoisting where a function can sometimes be used before it is initialized. You can only do this if you declare functions with the function syntax.

function createFunction() {
    return f;
    function f(a, b) {
        const sum = a + b;
        return sum;
    }
}
const f = createFunction();
console.log(f(3, 4)); // 7

In this example, the function is returned before it is initialized. Although it is valid syntax, it is sometimes considered bad practice as it can reduce readability.
Closures

An important topic in JavaScript is the concept of closures. When a function is created, it has access to a reference to all the variables declared around it, also known as it's lexical environment. The combination of the function and its enviroment is called a closure. This is a powerful and often used feature of the language.

function createAdder(a) {
    function f(b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createAdder(3);
console.log(f(4)); // 7

In this example, createAdder passes the first parameter a and the inner function has access to it. This way, createAdder serves as a factory of new functions, with each returned function having different behavior.
Arrow Syntax

The other common way to declare functions is with arrow syntax. In fact, on many projects, it is the preferred syntax.
Basic Syntax

const f = (a, b) => {
    const sum = a + b;
    return sum;
};
console.log(f(3, 4)); // 7

In this example, f is the name of the function. (a, b) are the arguments. You can write any logic in the body and finally return a result. You are allowed to return nothing, and it will instead implicitly return undefined.
Omit Return

If you can write the code in a single line, you can omit the return keyword. This can result in very short code.

const f = (a, b) => a + b;
console.log(f(3, 4)); // 7

Differences

There are 3 major differences between arrow syntax and function syntax.

    More minimalistic syntax. This is especially true for anonymous functions and single-line functions. For this reason, this way is generally preferred when passing short anonymous functions to other functions.
    No automatic hoisting. You are only allowed to use the function after it was declared. This is generally considered a good thing for readability.
    Can't be bound to this, super, and arguments or be used as a constructor. These are all complex topics in themselves but the basic takeaway should be that arrow functions are simpler in their feature set. You can read more about these differences here.

The choice of arrow syntax versus function syntax is primarily down to preference and your project's stylistic standards.
Rest Arguments

You can use rest syntax to access all the passed arguments as an array. This isn't necessary for this problem, but it will be a critical concept for many problems. You can read more about ... syntax here.
Basic Syntax

The syntax is:

function f(...args) {
    const sum = args[0] + args[1];
    return sum;
}
console.log(f(3, 4)); // 7

In this example the variable args is [3, 4].
Why

It may not be immediately obvious why you would use this syntax because you can always just pass an array and get the same result.

The primary use-case is for creating generic factory functions that accept any function as input and return a new version of the function with some specific modification.

By the way, a function that accepts a function and/or returns a function is called a higher-order function, and they are very common in JavaScript.

For example, you can create a logged function factory:

function log(inputFunction) {
    return function(...args) {
        console.log("Input", args);
        const result = inputFunction(...args);
        console.log("Output", result);
        return result;
    }
}
const f = log((a, b) => a + b);
f(1, 2); // Logs: Input [1, 2] Output 3


*/
