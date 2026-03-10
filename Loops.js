// For Loop
// for(let i=1; i<=10; i++) {
//     console.log(i);
// }

// for(let i=10; i>=1; i--) {
//     console.log(i);
// }

// for(let i=1; i<=10; i=i+4) {
//     console.log(i); 
// }

// for(let i=10; i>=1; i=i-4) {
//     console.log(i);
// }
   
// Odd numbers from 1 to 15
// for(let i=1; i<=15; i=i+2) {
//     console.log(i);
// } 

// Odd numbers from 15 to 1
// for(let i=15; i>=1; i=i-2) {
//     console.log(i);
// }

// ---------------------------------------------------------------------

// Even numbers from 2 to 10
// for(let i=2; i<=10; i=i+2) {
//     console.log(i);
// } 

// Even numbers from 10 to 2
// for(let i=10; i>=2; i=i-2) {
//     console.log(i); 
// } 

// ---------------------------------------------------------------------

// Print multiplication table for 5
// let n = prompt("Enter your number"); // prompt me se jo bhi response aata hai vo string hoti hai number nai hota
// n = parseInt(n); // parseInt(): used to convert any variable into int datatype

// for(let i=n; i<=n*10; i=i+n) { 
//     console.log(i); 
// }   

// for(let i=5; i<=50; i=i+5) {
//     console.log(i); 
// } 

// ---------------------------------------------------------------------

// Nested Loops
// for(let i=1; i<=3; i++) {
//     console.log(`Outer loop ${i}`);
//     for(let j=1; j<=3; j++) {
//         console.log(j);  
//     }
// } 

// ---------------------------------------------------------------------

// While Loop
// let i = 1;
// while(i<=5) {
//     console.log(i); 
//     i++;
// } 

// let i = 0;
// while(i<=20){
//     console.log(i);
//     i+2;
// } 

// ---------------------------------------------------------------------

// Favourite movie
// const favMovie = "Avengers";
// let guess = prompt("Enter your guess");

// while ((guess != favMovie) && (guess != "quit")) {
//     guess = prompt("wrong guess.please try again");
// } 
// if(guess == favMovie) { 
//     console.log("congrats you guessed it right");
// } else { 
//     console.log("quit");   
// } 

// ---------------------------------------------------------------------

// Break keyword 
// let i = 1; 
// while(i<=5) {
//     if(i == 4) {
//         break;
//     }
//     console.log(i); 
//     i++; 
// } 
// console.log("numbers printed till 3");

// ---------------------------------------------------------------------

// Loops with Arrays : for array loops are used to traverse(find) each element easily 
// let fruits = ["apple", "banana", "orange", "mango", "pineapple"];
// forward
// for(let i=0; i<=fruits.length; i++) {
//     console.log(i,fruits[i]); // with (i) index numbers are printed and with (fruits[i]) only fruits are printed
// } 

// only odd fruits printed
// for(let i=1; i<=fruits.length; i=i+2) {
//      console.log(i,fruits[i]); 
// }

// only even fruits printed
// for(let i=0; i<=fruits.length; i=i+2) {
//      console.log(i,fruits[i]); 
// }

// backward
// for(let i=fruits.length-1; i>=0; i--) {
//     console.log(i,fruits[i]);
// }

// ---------------------------------------------------------------------

// Loops with Nested Arrays
// let heroes = [ 
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonder woman", "flash"] 
// ] 

// for(let i=0; i<heroes.length; i++) { // heroes.length: means total no.of arrays
//     console.log(i,heroes[i], heroes[i].length); // i = index of array, heroes[i] = array elements heroes[i].length = size of each array

//     for(let j=0; j<heroes[i].length; j++) { // heroes[i].length: the size of each array
//         console.log(`j=${j}, ${heroes[i][j]}`); // with the help of i we are getting array and with the help of j we are getting index of each array
//     } 
// }  

// for of loop: can be used in arrays and strings, used to access the individual items of array and individual character of string 
// let fruits = ["apple", "banana", "mango", "pineapple", "orange"];

// for(fruit of fruits) { 
//     console.log(fruit);
// }

// for(char of "makarandpatil") {
//     console.log(char);
// }

// ---------------------------------------------------------------------

// Nested for of loop
// let heroes = [  ["ironman", "spiderman", "thor"],["superman", "wonder woman", "flash"] ]
// for(list of heroes) {
//     for(hero of list) {
//         console.log(hero);
//     } 
// } 

// ----------------------------------------------------------------------

// To Do List App
let todo = [];
let req = prompt("please enter your request");

while(true) { // user can have multiple options to add,list,delete and quit so in while loop we have added true condition for that and when user choose to quit option it will break
    if(req == "quit") { 
        console.log("quitting app");
        break; 
    }

    if(req == "list") {
        console.log("----------");
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]); // i = index of array, todo[i]: elements present in array
        }
        console.log("----------");
    } 
    else if(req == "add") {
        let task = prompt("please enter the task yoo want to add");
        todo.push(task); 
        console.log("task added");
    }
    else if(req == "delete") { 
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1); 
        console.log("task deleted");
    }
}