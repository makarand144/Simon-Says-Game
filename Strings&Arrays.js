// trim()
// let str = "   Hello   ";
// console.log(str.trim()); 

// indexOf(): it gives the index of the letters - strings 
// let str = "IloveCoding";
// console.log(str.indexOf("love")); 
// console.log(str.indexOf("I")); 
// console.log(str.indexOf("o")); 

// Method Chaining
// let str = "    Makarand Patil    ";
// console.log(str.trim().toUpperCase().toLowerCase());

// slice()
// let str = "IloveCoding";
// console.log(str.slice(5)); 
// console.log(str.slice(1,4));

// replace()
// let str = "IloveCoding";
// console.log(str.replace("love","do"));

// repeat()
// let str = "Apple";
// console.log(str.repeat(3));

// Creating Arrays - new topic
// let info = ["Makarand", "22", "6.5"];
// console.log(info);

// console.log(info[0][0]);
// console.log(info[0][1]);
// console.log(info[0][2]);

// console.log(info[1][0]);
// console.log(info[1][1]);

// console.log(info[2][0]);
// console.log(info[2][1]);
// console.log(info[2][2]);

// push() - adds word at the end
// info.push("Learning");
// console.log(info);

// pop() - removes last word 
// info.pop();

// unshift() - adds word at the first 
// info.unshift("Emailid");

// shift() - removes first word 
// info.shift(); 

// indexOf() - array
// let primary = ["red","blue","green"];
// console.log(primary);

// console.log(primary.indexOf("red"));  
// console.log(primary.indexOf("blue"));
// console.log(primary.indexOf("yellow")); 

// includes() 
// console.log(primary.includes("blue"));
// console.log(primary.includes("yellow"));

// concat
// let primary = ["red", "blue", "green"];
// console.log(primary); 
// let secondary = ["orange", "yellow", "violet"];
// console.log(secondary);

// concat()
// console.log(primary.concat(secondary)); 
// console.log(secondary.concat(primary)); 

// reverse() 
// console.log(primary.reverse());
// console.log(secondary.reverse()); 

// slice()
// let colors = ["red", "blue", "green", "yellow", "pink", "white"];
// console.log(colors.slice()); 
// console.log(colors.slice(2));
// console.log(colors.slice()); // returns a copy of the original array and it do not changes anything in the array it returns original array 
// console.log(colors.slice(1,3)); 
// console.log(colors.slice(-1));   

// splice()
// let colors = ["red", "blue", "green", "yellow", "pink", "white"];
// console.log(colors); 
// console.log(colors.splice(3)); 
// console.log(colors); // Here yellow, pink, white colors are removed
// console.log(colors.splice(0,1)); // Here there are three indexes left (red,blue,green) and and we have put 0 to 1 so here red color will be removed
// console.log(colors); // Here blue and green will be printed
// console.log(colors.splice(0,1,"black","orange")); // Here on index 0 blue is present so blue will be removed and black,orange will replace blue
// console.log(colors);
// colors.push("brown");
// console.log(colors);
// console.log(colors.splice(1,0,"grey")); // Here on 1st index orange is present but I want to add grey on position of orange
// console.log(colors); // Here grey will be printed on 1st index and orange will be on 2nd index
// console.log(colors.splice(2,1,"yellowish")); // Here orange will be removed and yellowish replaces orange
// console.log(colors); // Here yellowish color is printed

// Practice question on splice()
// let months = ["january","july","march","august"];
// console.log(months);
// console.log(months.splice(0,2,"july","june"));
// console.log(months);
// console.log(months.splice(0,1,"july"));
// console.log(months);
// console.log(months.splice(1,1,"june"));
// console.log(months);

// Practice question on reverse() and indexOf()
// let languages = ["C","C++","html","javascript","python","java","C#","sql"];
// console.log(languages);
// console.log(languages.reverse());
// console.log(languages.indexOf("javascript"));

// sort()
// let colors = ["red", "blue", "green", "yellow", "pink", "white"];
// console.log(colors.sort());
// let chars = ['m','x','c','q'];
// console.log(chars.sort()); 
// let numbers = [50,75,20,54,90];
// console.log(numbers.sort());  

// Reference Variables
// let arr = ['a','b','c'];
// console.log(arr);

// let arrCopy = arr;
// console.log(arrCopy);

// arr.push('d');
// console.log(arr);
// console.log(arrCopy);

// arrCopy.pop()
// console.log(arrCopy);

// Constant Arrays
// const g = 9.8;
// console.log(g);

// const arr = [1,2,3,4];
// console.log(arr);

// Nested Arrays
// let nums = [ [2,4], [3,6], [4,8] ];
// console.log(nums); 
// console.log(nums.length);

// Practice question on tic-tac-toe game
let game = [ ['X',null,'O'], [null,'X',null], ['O',null,'X'] ];
console.log(game);
console.log(game[0]);
console.log(game[0][1] = 'O');
console.log(game);  