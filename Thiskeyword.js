// const student = {
//     name:"makarand",
//     age: 22,
//     eng: 75,
//     phy:60,
//     math: 80,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng + this.phy + this.math / 3); // Will be executed on the console 
//         // console.log(avg);
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }; 
// function getAvg() {
//     console.log(this); 
// }  

// Try and Catch
// console.log("hello");
// console.log("hello");
// //let a = 6;
// try { 
//     console.log(a); 
// } 
// catch(err) { 
//     console.log("caught an error... a is not defined");
//     console.log(err); 
// } 
// console.log("hello");
// console.log("hello"); 

// Arrow Functions
// let sum = (a,b) => {
//     console.log(a + b);
// } 
  
// const cube = (n) => {
//     console.log(n*n*n);
// }

// const pow = (a,b) => {
//     return a ** b;
// }

// Implicit Return in Arrow Function
// let mul = (a,b) => (a * b); 
// let add = (a,b) => (a + b); 
// let cube = n => n * n * n; 

// Set Timeout Function
// console.log("Hey whatsapp");

// setTimeout (func => {
//     console.log("Instagram") 
// },2000); 

// console.log("Welcome to"); 

// setTimeout ( () => {
//     console.log("Makarand Patil")
// },2000); 
  
// Set Interval Function

// setInterval ( () => { // it will print contiuously one after other
//     console.log("Makarand Patil")
// },2000); 

// let id = setInterval ( () => {
//     console.log("Makarand Patil");
// },2000); 
// console.log(id);
// // clearInterval(id); // To delete

// let id2 = setInterval ( () => {
//     console.log("Sumit Matale");
// },2000); 
// console.log(id2); 

// Practice Question 1 - Write an arrow function that returns the square of number 'n'

// Arrow function
// let square = n => {
//     return n * n;
//     // console.log(n * n);
// } 

// Implicit return in arrow function
// let square = (n) => (n*n);

// Practice Question 2 - Write a function that prints "Hello World" 5 times at intervals of 2s each
let id = setInterval ( () => {
    console.log("Hello World");
},2000);

setTimeout ( () => {
    clearInterval(id); 
    console.log("Hello World printed 5 times");
},10000); 