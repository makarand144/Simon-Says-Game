// Practice Question 1 - Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr) {
        total += number;
    }
    return total / arr.length;
};

let arr = [1,2,3,4,5,6];
console.log(arr);

// Practice Question 2 - Write an arrow function named isEven() that takes a single number as arguments and returns if it is even or not
let num = 3;

const isEven = (num) => num % 2 == 0; 