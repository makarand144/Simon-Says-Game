// let student = {
//     name: "Makarand",
//     age: 22,
//     marks: 95.5,
//     city: "Nashik"
// };

// -------------------------------------------------------------

// Thread / Twitter Post 

// const post = {
//     username: "makarand#144",
//     content: "This is my first post",
//     likes: 100,
//     reposts: 2,
//     tags: ["@sumit, @shreyas, @atharv"],
// };     

// -------------------------------------------------------------

// Get values

// let student = {
//     name: "makarand",
//     age: 22    
// }; 
// To access values of the object
    // student["name"];
    // student.name;
    // student["age"] 
    // student.age;

// -------------------------------------------------------------

// Add / Update values 

// let student = {
//     name: "makarand",
//     age: 22,
//     marks: 95.5,
//     city: "nashik"
// };
// To add/update/delete values
    // student.city = "pune"; // To update the city
    // student.gender = "male"; // To add new section
    // delete student.marks;
// -------------------------------------------------------------

// Nested Objects

// const classInfo = {
//     makarand: {
//         grade: "A+",
//         city: "Nashik"
//     },

//     sumit: {
//         grade: "A",
//         city: "Pune",
//     },

//     atharv: {
//         grade: "O",
//         city: "Gurugram",
//     }  
// };
// classInfo
// classInfo.makarand;
// classInfo.sumit;
// classInfo.atharv;

// classInfo.makarand.city;
// classInfo.makarand.grade;

// -------------------------------------------------------------

// Array of Objects

// const classInfo = [
//     {
//         name: "makarand",
//         grade: "A+",
//         city: "Nashik"
//     },

//     {
//         name: "atharv",
//         grade: "A",
//         city: "Pune",
//     },

//     {
//         name: "sumit",
//         grade: "O",
//         city: "Gurugram",
//     }  
// ];
// classInfo
// classInfo[0]
// classInfo[1]
// classInfo[2]

// classInfo[0].name;
// classInfo[0].city;
// classInfo[0].grade;
// classInfo[0].city = "Banglore";

// -------------------------------------------------------------

// Math Object

// Math.abs(n) - positive number to positive, negative number to also positive
// Math.pow(a,b) - a to the power b
// Math.floor(n) - does round off of nearest smallest integer value and removes decimal 
// Math.ceil(n) - does round off of largest integer value
// Math.random() - gives values from 0 to 1, 1 is exclusive, means 1 does not come 

// -------------------------------------------------------------

// Guessing game 
// Problem Statement - User enters a max number & then tries to guess a random generated number between 1 to max
const max = prompt("enter the max number"); 

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess your number");

while(true) {
    if(guess == "quit") { 
        console.log("user quit"); 
        break;
    } 
    if(guess == random) {
        console.log("you are right congrats!! random number was", random);
        break;
    }
    else if(guess < random) {
        guess = prompt("hint: your guess was too small. please try again");
    }
    else {
        guess = prompt("hint: your guess was too large. please try again");
    } 
    // else {
    //     guess = prompt("your guess was wrong. please try again");
    // }
} 