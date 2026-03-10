// Functions in JS
// function name() {
//     console.log("makarand patil");
//     console.log("learning MERN Stack");
// }
// name(); // function call

// function print1to5() {
//     for(let i=1; i<=5; i++) {
//         console.log(i);
//     }
// }

// print1to5();

// function isAdult() { 
//     let age = 20; 
//     if(age >= 18) { 
//         console.log("adult");
//     } 
//     else { 
//         console.log("not adult"); 
//     } 
// } 
// isAdult();

// Practice Question 1 - Create a function that prints a poem
// function printPoem() {
//     console.log("Twinkle twinkle little star,");
//     console.log("how I wonder what you are,");
//     console.log("above the world so high,");
//     console.log("like a diamond in the sky");
// }
// printPoem(); 

// Practice Question 2 - Create a Function to roll a dice & always display the value of the dice (1 to 6)
// function rollDice() {
//     let dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
// }
// rollDice(); 
// rollDice(); 
// rollDice(); 
// rollDice(); 

// Function with Arguments
// function printInfo(name,age) { // Here name and age are arguments / parameters
//     console.log(`${name}'s age is ${age}.`);
// } 
// printInfo("Makarand",22); 
// printInfo("Sumit",21); 

// function sum(a,b) {
//     console.log(a + b);
// } 
// sum(2,3);
// sum(6,8); 

// Practice Question 3 - Create a Function that gives us the average of 3 numbers
// function calcAverage(a,b,c) {
//     let avg = (a+b+c) / 3;
//     console.log(avg);
// } 
// calcAverage(2,4,6);   

// Practice Question 4 - Create a Function that prints the multiplication table of a number
// function printTable(n) {
//     for(let i=n; i<=n*10; i=i+n) {
//         console.log(i); 
//     }
// } 
// printTable(16);

// return keyword
// function sum(a,b){
//     console.log("hello");
//     console.log("hello");
//     return a+b; // return statement ke baad jo bhi likhte hai vo execute nhi hota aur return keyword sirf ek hi value return kar ke deta hai
//     console.log("hello");
//     console.log("hello");
// } 
// console.log(sum(1,2));

// function isAdult(age) {
//     if(age >= 18) {
//         return "adult";
//     } 
//     else { 
//         return "not adult";
//     }
// }  

// Practice Question 5 - Create a Function that returns the sum of numbers from 1 to n
// function getSum(n) {
//     let sum = 0;
//     for(let i=1; i<=n; i++) {
//         sum = sum + i; // sum += i
//     } 
//     return sum; // will be executed on the console not here 
    // console.log(sum); // By function call 
//} 
// getSum(5); 

// Practice Question 6 - Create a Function that return the concatenation of all strings in an array
// let str = ["hi","hey","whatsapp","bye"];

// function concat(str) {
//     let result = ""; 
    
//     for(let i=0; i<str.length; i++) { 
//         result += str[i];
//     }
//     return result;
// } 

// let sum = 50; // Global scope - variables can be used anywhere in the code 

// function calcSum(a,b) {
//     let sum = a+b; // Function Scope - variables can be accessible only inside the function scope, not accessible outside the function scope
//     console.log(sum);
// } 
// calcSum(2,4); 
// console.log(sum); 

// Practice Question - On scope
// let greet = "hello"; // Global scope

// function changeGreet() {
//     let greet = "namaste"; // Function scope
//     console.log(greet);
    
//     function innerGreet() {
//         console.log(greet); // lexical scope
//     }
//     innerGreet(); 
// }
// console.log(greet); 
// changeGreet();

// Function Expressions
let sum = function (a,b){
    return a+b;
}

let hello = function() {
    console.log("hello"); 
}

hello = function() {
    console.log("namaste");
}