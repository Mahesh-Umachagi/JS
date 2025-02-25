// functions returning other functions

// let outerFunction = function(){
//     return function(){
//         console.log("Inncer Function");
//     }
// }

// let inFunction = outerFunction()
// console.log(typeof inFunction);

// inFunction()

// outerFunction()() // returning function


// function that return another function
// function createMultiplier(x){
//     return function(y){
//         return x*y
//     }
// }

// Call the createMultiplier function and assign the returned function to a variable
// let double = createMultiplier(2);
// // Use the returned function to perform a calculation
//  console.log(double(5)); // Output: 10 x = 2 y = 5

 /*
 callback
 A callback function in JavaScript is a function that is passed as an argument to another function and is executed after the completion of a specific task. 
 Callbacks are commonly used to handle asynchronous operations, such as reading files, making API calls, or handling user input events, where the result is not immediately available.
 */

//synchronous

// console.log("callback sync start");

// function divide(a,b){
//     console.log(a/b);
// }

// function operation(val1,val2,callback){
//     callback(val1,val2)
// }

// operation(10,5,divide)

// function sum(a,b){
//     console.log(a+b);
// }

// operation(6,5,sum)
// console.log("sync callback end");

// asynchronous
/*
Asynchronous callbacks, in the context of JavaScript, refer to callback functions that are executed after an asynchronous operation completes. 
Asynchronous operations are tasks that don't block the program's execution. Instead of waiting for the operation to finish, 
the program continues to execute the subsequent code, and when the asynchronous operation completes, the associated callback function is triggered.
*/
// console.log("callback async start");

// setTimeout(()=>{
//     console.log("in a timeout");
// },0)

// console.log("callback async end");

// console.log("Start");
// function loginUserServer(email,callback){
//     console.log("checking user in database");
//     // setTimeout(()=>{
//     //     callback(email)
//     //     console.log("end of the code");
//     // },0)
// }

// const user = loginUserServer('harishz@google.com',(user)=>{
//     console.log(user,"logged in successfully");
// })

// function sum(a,b){
//     return a+b
// }

// console.log(sum(10,10));

// console.log("end");

// use js visualizer 9000 for understanding for above and below codes

//event loop
/*
The event loop is a fundamental concept in asynchronous programming and plays a significant role in how JavaScript handles asynchronous operations. 
It's part of the JavaScript runtime environment and enables non-blocking I/O operations, making JavaScript suitable for handling multiple tasks simultaneously without freezing the entire program.

callstack, Eventloop, micro task queue, taks queue / callback queue
*/

// function logA() {console.log('A')}
// function logB() {console.log('B')}
// function logC() {console.log('C')}
// function logD() {console.log('D')}

// setTimeout(logB,0)
// Promise.resolve().then(logC)
// logA()
// logD()


// console.log("Start");
// setTimeout(function(){console.log('setTimeout1')},1000)
// Promise.resolve()
// .then(function(){console.log('promise1')})
// .then(function(){console.log('Promise2')})

// setTimeout(function(){console.log('setTimeout2')},1000)
// Promise.resolve()
// .then(function(){console.log('Promise3')})
// .then(function(){console.log('promise4')})
// console.log("end");

/*
Promise

Promises in JavaScript are a way to deal with asynchronous operations more easily and efficiently. 
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

const myPromise = new Promise((resolve, reject) => {
    // Perform an asynchronous operation
    // If successful, call resolve(value)
    // If there's an error, call reject(error)
});
resolve: This is a function provided by the Promise system. When called, it indicates that the asynchronous operation was successful and passes a value as the result.
reject: This is also a function provided by the Promise system. When called, it indicates that the asynchronous operation encountered an error and passes an error object.

Promises can be in one of three states:
Pending: The initial state. The promise is neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason (usually an error) for the failure.

const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = "Data fetched successfully!";
        resolve(data); // The operation was successful, so we call resolve with the data
    }, 2000); // Simulating a 2-second delay
});

fetchData
    .then(data => {
        console.log(data); // Output: "Data fetched successfully!"
    })
    .catch(error => {
        console.error(error); // Handle errors here if the operation fails
    });
In this example:

fetchData is a Promise that resolves with the string "Data fetched successfully!" after a 2-second delay.
The then method is used to handle the successful result of the Promise, and the catch method is used to handle errors if the Promise is rejected.
*/

// promise creation
// const promise = new Promise(function(resolve,reject){
//     const string1 = "UttaraJS"
//     const string2 = "UttaraJ"

//     if(string1 === string2){
//         resolve()
//     }else{
//         reject()
//     }
// })

//promise usage
// promise
//     .then(function(){
//         console.log("promise resolved successfully");
//     })
//     .catch(function(){
//         console.log("promise is rejected");
//     })

//2 promise creation
// const helperPromise = function(x,y) {
//     const promise = new Promise(function(resolve,reject){
//         // const x = "gfg"
//         // const y = "gfg"

//         if(x===y){
//             resolve("Strings are same")
//         }else{
//             reject("Strings are not same")
//         }
//     })
//     return promise;
// }

// promise usage
// async function demoPromise(x,y){
//     try{
//         let message = await helperPromise(x,y)
//         console.log(message);
//     }catch(error){
//         console.log("Error: "+error);
//     }
// }

// demoPromise("UttaraJS","UttaraJS")

/*
async/await
async keyword is used to define an asynchronous function, 
and the await keyword is used inside an async function to wait for a promise to resolve before proceeding further.

The async keyword is used before a function declaration, expression, or arrow function. 
It indicates that the function will always return a promise. If the function returns a non-promise value, 
JavaScript automatically wraps it in a resolved promise.

The await keyword can only be used inside an async function. 
It is used to pause the execution of the function until the promise is resolved, and it returns the resolved value.
*/

// real world example : password checker

// const allowed = ["1234","pass","apple"]

// function passwordChecker(pass) {
//     return allowed.includes(pass)
// }

// function login(password){
//     return new Promise((resolve,reject)=>{
//         if(passwordChecker(password)){
//             resolve({
//                 status: true
//             })
//         }else{
//             reject({
//                 status:false
//             })
//         }
//     })
// }

// function checker(pass) {
//     login(pass)
//         .then(token => {
//             console.log("Approve");
//             console.log(token);
//         })
//         .catch(value =>{
//             console.log("Reject");
//             console.log(value);
//         })
// }

// async function checker(pass){
//     try{
//         let msg = await login(pass)
//         console.log("Approve: ",msg);
//     }catch(error){
//         console.log("Reject : ",error);
//     }
// }

// checker("1234")
// checker("1324")

// Remote call
/*
Fetch 
The fetch() function in JavaScript is a modern API for making network requests, typically to retrieve resources from a URL. 
It is more powerful and flexible than older techniques like XMLHttpRequest. 
The fetch() function returns a Promise that resolves to the Response object representing the response to the request, 
whether it is successful or not.
*/

// console.log("Start");
// async function getData(){
//     const url = "https://jsonplaceholder.typicode.com/todos/1"

//     try{
//         const response = await fetch(url);
//         const jsonResponse = await response.json();
//         console.log(jsonResponse);
//     }catch(error){
//         console.log("Error: ",error);
//     }
// }

// getData()

// console.log("End");

/*
fetch('https://api.example.com/data') sends a GET request to the specified URL and returns a Promise.
The first .then() block checks if the response is okay. If not, it throws an error. If the response is okay, it parses the JSON response using response.json().
The second .then() block processes the parsed data.
The .catch() block handles any errors that occur during the fetch operation.
*/

const url = 'https://jsonplaceholder.typicode.com/todos/1'
fetch(url)
    .then(response => response.json())
    .then(abc=>console.log(abc))
    .catch(err=>console.log(err))