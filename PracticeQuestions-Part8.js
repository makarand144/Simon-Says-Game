// Question 1 - Square and sum the array elements using the arrow functions and then find the average of array

// let arr = [1,2,3,4,5];

// let square = arr.map( (el) => el * el); 
// console.log(square);

// let sum = arr.reduce( (res,el) => res + el);
// console.log(sum); 

// let avg = sum / arr.length;
// console.log(avg);

// Question 2 - Create a new array using the map function whose each element is equal to the original element plus 5

// let numbers = [1,2,3,4,5,6];
// let equal = numbers.map( (number) => number + 5);
// console.log(equal);

// Question 3 - Create a new array whose elements are in uppercase of words present in the original array

// let strings = ["ironman","thor","hulk","aquaman"];
// let chars = strings.map( (string) => string.toUpperCase());
// console.log(chars);

// Question 4 - Write a function called doubleAndReturnArgs which accepts an array and a variable nubmer of arguments. 
// The function should return a new array with the original array values and all the additional arguments doubled.
const doubleAndReturnArgs = (arr,...args) => [...arr, ...args.map( (v) => v*2),];

doubleAndReturnArgs([1, 2, 3], 4, 4); //[1,2,3,8,8]
doubleAndReturnArgs([2], 10, 4); // [2,20,8] 

// Question 5 - Write a function called mergeObjects that accepts two objects and returns a new object 
// which contains all the keys and values of the first object and second object
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
mergeObjects({a:1, b:2 }, {c:3, d:4});













// function sum(...args) {
//     for(let i=0; i<args.length; i++) {
//         console.log("you gave us: ", args[i]);
//     } 
// }