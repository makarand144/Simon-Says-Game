// let arr = [1,2,3,4,5];

// Arrow Function
// arr.forEach( (el)  => {
//     console.log(el);
// });

// forEach()
// arr.forEach(function (el) {
//     console.log(el);
// });

// let print = function(el) {
//     console.log(el);
// };
// arr.forEach(print);  

// For objects we can use also use forEach loop
// let arr = [ 
//     {
//     name: "makarand",
//     marks: 95
//     },

//     {
//      name: "sumit",
//      marks: 94
//     },

//     {
//       name:"vedant",
//       marks: 90
//     }
// ];

// let gpa = arr.map( (el) => {
//     return el.marks / 10; 
// }) 
// arr.forEach((student) => {
//     console.log(student);
//     // console.log(student.name);
//     // console.log(student.marks);
// })

// Map() 
// let num = [1,2,3,4];

// let double = num.map( (el) => { // el: callback function
// return el * 2;
// });    

// Filter() 
// let num = [1,2,3,4,5,6,7,8,9,10,11,12];

// let ans = num.filter( (el) => {
//     return el % 2 == 0; // even -> true, odd -> false
//     // return el % 2 != 0;
//     // return el < 5;
// }); 

// every() - similar to AND operator (true, true => true otherwise false)
// let arr = [1,2,3,4];
// let arr = [2,4];

// let ans = arr.every( (el) => {
//     return el % 2 == 0;
// });

// some() - similar to OR operator (true ,false => true any one statement is true it will true, will return false only if both are false)
// let arr = [1,2,3,4];

// let ans = arr.some( (el) => {
//     return el % 2 == 0;
// })

// reduce()
// let nums = [1,2,3,4];
// let finalValue = nums.reduce((res, el) => res + el);
// console.log(finalValue); // Here the sum of array will be printed that is 10 

// let nums = [1,2,3,4];
// let finalValue = nums.reduce((res, el) => {
//     console.log(res);
//     return res + el;
// });
// console.log(finalValue);   

// Maximum in Array
// let arr = [2,4,8,6,7,9];
// let max = 0;

// for(let i=0; i<arr.length; i++) {
//     if(max < arr[i]) {
//         max = arr[i];
//     } 
// }
// console.log(max); 

// Maximum in Array - by using reduce()
// let arr = [2,7,5,9,8,3];

// let max = arr.reduce( (max,el) => {
//     if(max < el) {
//         return el;
//     } else {
//         return max;
//     }
// });
// console.log(max); 

// Practice Question 1 - Check if all the number in our array are multiples of 10 or not 
// let arr = [2,4,8,7,10,60,40,90];

// let num = arr.every( (el) => {
//     return el % 10 == 0; // will run on console not directly on browser
// });

// let nums = [4,10,60,40,90];

// let ans = nums.every( (el) => el % 10 == 0);
// console.log(ans);

// Practice Question 2 - Create a function to find the min number in an array
// let nums = [2,7,6,5,1];

// let min = nums.reduce( (min,el) => {
//     if(min < el) {
//         return min; 
//     } else {
//         return el; 
//     }
// });
// console.log(min); 

// Default Parameters
// function sum (a, b = 2) { // we can assign default value only to 2nd parameter only not to the first parmeter 
//     return a + b; 
// } 

// console.log(sum(5));

// function sum (a = 2, b) { // if we assign default value to the first parameter then it will print NaN 
//     return a + b;
// }
// sum(1); // Here a = 1 

// Spread
// let arr = [1,7,8,2,6,4];
// console.log(...arr);

// let name = "MakarandPatil";
// console.log(...name);

// Spread with Array Literals 
// let arr = [1,2,3,4,5,6];
// let newArr = [...arr]; 
// console.log(newArr);
// newArr.push()

// let chars = "Hello";
// let str = [...chars];
// console.log(str); 

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let nums = [...odd, ...even];
// console.log(nums);

// Spread with Object Literals 
// const data = {
//     email: "mumbaiindians@gmail.com",
//     password: "mbdi"
// };

// const dataCopy = {...data, id: 123};
// console.log(dataCopy); 

// Rest
// function sum(...args) {
//     for(let i=0; i<args.length; i++) {
//         console.log("you gave us: ", args[i]);
//     } 
// }

// function min(a,b,c,d) { 
//     console.log(arguments);
// }

// Destructuring
// let names = ["ironman", "thor", "hulk", "superman", "captainamerica", "spiderman", "batman"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

// let [winner, runnerup, secondRunnerup,...others] = names; // ...others -> will include all the superheroes from superman to batman

// Destructuring with Objects
const student = {
    name: "makarand",
    age: 22,
    email: "makarandpatil@gmail.com",
    password: "Mak#144" 
};

let {email, password} = student; 