// // arr1 = new Array("Purple", "Green", "Yellow");
// // arr2 = ["black","Orange","Pink"];

// // console.log(arr1);
// // console.log(arr2);
// // console.log(typeof arr2);// Object

// // arr3 = new Array(10)
// // arr4 = [10]
// // console.log(arr3);
// // console.log(arr4);

// // arr3[11] = 5
// // console.log(arr3);

// // let arr = ["hi there", 5, true]
// // console.log(typeof arr[0]);
// // console.log(typeof arr[1]);
// // console.log(typeof arr[2]);

// // cars = ["Toyota", "Reanult", "Volkswagen"]
// // console.log(cars[0]);
// // console.log(cars[1]);
// // console.log(cars[2]);
// // console.log(cars[3]);
// // console.log(cars[-2]);

// // cars[0] = "Tesla"
// // console.log(cars[0]);
// // console.log(cars);

// // cars[3] = "Kia"
// // cars[-2] = "Fiat" // ley and value
// // console.log(cars[3]);
// // console.log(cars[-1]);
// // console.log(cars);

// // cars[9] = "Bmw"
// // console.log(cars);

// // colors = ["black", "Orange", "Pink"]
// // booleans = [true,false,false,true]
// // emptyArray = []

// // console.log(colors.length);
// // console.log(booleans.length);
// // console.log(emptyArray.length);

// // lastElement = colors[colors.length-1]
// // console.log(lastElement);

// // numbers = [12,24,36]
// // numbers[-1] = 0
// // numbers[8] = 48
// // console.log(numbers.length); // 9
// // console.log(numbers);

const arr = [1,2,5,6]
console.log(arr);

let str = "We love javascript"
str_arr = str.split("")
console.log(str_arr);

str_word = str.split(" ")
console.log(str_word);

console.log(str_arr.join(""));
console.log(typeof str_arr);//"object" (because str_arr is an array)

console.log(typeof str_arr.join(""));// string

// // -------------------------------------------------------------------------------------------------

// fruits = ["apple", "orange","lemon"]
// fruits.push("pine")

// let myFruit = fruits.push("Melon")
// console.log(myFruit); // 5 index
// console.log(fruits);

// //splice
// // The splice() method adds and/or removes array elements.
// // The splice() method overwrites the original array
// // array.splice(Start-index,deleteCount-howmany, item1, ....., itemX)

// let shapes = ["Circle","Triangle","Rectangle","Pentagon"]
// shapes.splice(2,0,"Sqare","trapezoid")
// console.log(shapes);

// shapes.splice(2,3,"hexagon","octagon")
// console.log(shapes);

let arr5 = [1,2,3]
let arr6 = [4,5,6,7]
let arr7 = arr5.concat(arr6)
console.log(arr7);

// arr7.pop()
// console.log(arr7);

// arr7.shift()
// console.log(arr7);

// // arr7.splice(1,3)
// // console.log(arr7);

// console.log(arr7.indexOf(5));

// let animals = ["dog","horse","cat","platypus","dog"]
// console.log(animals.lastIndexOf("dog"));
// console.log(animals.indexOf("dog"));

// let names = ["James","Alica","Fatiha","Maria","Bert"];
// names.sort()
// names.reverse()
// console.log(names);

// let ages = [18,72,33,56,40,41]
// ages.sort()
// console.log(ages);

// //Slice
// // The slice() method returns selected elements in an array, creates a new array.
// // The slice() method selects from a given start, up to a (not inclusive) given end.
// // The slice() method does not change the original array.

// let fruit = ["Banana","Orange","Lemon","Apple","Mango"]
// let citurs = fruit.slice(1,4)
// console.log(citurs);
// console.log(fruit);

// ---------------------------------------------------------------------------------------------------

// let dog = {
//     dogname: "JS",
//     weight:2.4,
//     color:"brown",
//     breed:"chihuahua",
//     age:3,
//     burglarBiter:true
// }

// console.log(dog);

// let dogColor1 = dog["color"]
// let dogColor2 = dog.color
// console.log(dogColor1);
// console.log(dogColor2);

// dog["color"] = "blue"
// dog.weight = 2.1

// console.log(dog);

// let company = {
//     companyName : "Healthy Candy",
//     acitivity: "food manufacturing",
//     address:{
//         street : "2nd street",
//         number: "123",
//         zipcode:"33116",
//         city:"Miami",
//         state:"Florida"
//     },
//     yearsOfEstablishment: 2021
// }

// company.address.zipcode = "33117"
// company["address"]["number"] = "100"
// console.log(company);

// let company2 = {
//     companyName: "Healty Candy",
//     activites:["food manufacturing","improving kids health"],
//     address:{
//         street : "2nd street",
//         number: "123",
//         zipcode:"33116",
//         city:"Miami",
//         state:"Florida"
//     },
//     yearsOfEstablishment: 2021
// }

// console.log(company2);
// console.log(company2.activites[1]);


// let addresses = [{
//     street : "2nd street",
//         number: "123",
//         zipcode:"33116",
//         city:"Miami",
//         state:"Florida"
// },{
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
// }]

// console.log(addresses);
// console.log(addresses[1].street);

// let company3 = {
//     companyName: "Healty Candy",
//     activites :["food manfucturing","improving kids health"],
//     address:[{
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },{
//         street: "1st West avenue",
//         number: "5",
//         zipcode: "75001",
//         city: "Addison",
//         state: "Texas" 
//     }],
//     yearOfEstablishment: 2021 
// }

// console.log(company3);
// console.log(company3.address[1].state);

//---------------------------------------------------------------------------------------------------------