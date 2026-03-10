// Question 1
// arr = [1,2,3,4,5,6,2,3];
// num = 2;

// for(let i=0; i<arr.length; i++) {
//     if(arr[i] == num) {
//         arr.splice(i,1);    
//     }
// }
// console.log(arr); 

// Question 2
// let number = 287152;
// let count = 0;

// while(number > 0) {
//     number = Math.floor(number / 10); // Here Math.floor is used to get integer part because by dividing we are getting the decimal number so we used Math.floor
//     count++;
// }
// console.log(count); 

// let number = 287152;
// let count = number.toString().length;

// console.log(count);

// Question 3
// let number = 287152;
// let sum = 0;
// let copy = number; 

// while(copy > 0) { 
//     digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy/10);
// }
// console.log(sum); 

// Question 4
// let n = 5;
// let factorial = 1;

// for(let i=1; i<=n; i++) {
//     factorial *= 1;
// }
// console.log(`factorial of ${n} is ${factorial}`);

// Question 5
let arr = [2,5,10,4,2,7,1,9];
let largest = 0;

for(let i=0; i<=arr.length; i++) {
    if(largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(largest);