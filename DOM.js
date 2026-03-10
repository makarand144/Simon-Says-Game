// console.log(window);
// console.log(document);
// console.log(document.all);
// console.dir(document.all); // object
// console.dir(document.all[10]); // object
// console.log(document.all[10].innerText);
// console.log(document.all[10].innerText = "Peter Parker");

// Selecting Elements 

// getElementById() 
// console.log(document.getElementById("id"));
// console.log(document.getElementById("mainImg"));
// let imgObj = document.getElementById("mainImg");
// console.log(imgObj);  
// console.log(imgObj.id);    
// console.log(imgObj.height); 
// console.log(imgObj.width);
// console.log(imgObj.tagName);
// console.log(imgObj.src = "Amazing_Fantasy.jpg");   

// getElementsByClassName() 
// console.log(document.getElementsByClassName("oldImg"));
// console.log(document.getElementsByClassName("oldImg")[0]);
// console.log(document.getElementsByClassName("oldImg")[1]);
// console.log(document.getElementsByClassName("oldImg")[2]);

// let smallImages = document.getElementsByClassName("oldImg");
// for(let i=0; i<smallImages.length; i++) {
//     console.dir(smallImages[i]);
//     console.dir(smallImages[i].src);
//     smallImages[i].src = "Spiderman.png";
//     console.log(`value of image no. ${i} is changed.`);
// } 

// getElementsByTagName() 
// console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByTagName("p")[1].innerText);
// console.log(document.getElementsByTagName("p")[1].innerText = "abcd"); 

// Query Selector - can be used by element, id, class, All
// console.dir(document.querySelector("p")); // quesrySelector() - Here element selector is used 
// console.dir(document.querySelector("#description")); // querySelector() - Here id selector is used
// console.dir(document.querySelector(".oldImg")); // querySelector() = Here class selector is used
// console.dir(document.querySelector("div a")); // querySelector() - Here anchor tag is used
// console.dir(document.querySelectorAll("div a")); // querySelectorAll() - Here we can select all tha tags contain in the div tag

// Using Properties and Methods
// let para = document.querySelector('p'); 
// console.log(para);
// console.log(para.innerText); // innerText: text visible on the screen 
// console.log(para.innerHTML); // innerHTML: used to see bold, italic, anchor, etc tags in the text
// console.log(para.textContent); // textContent: used to see hidden part of the text

// let heading = document.querySelector('h1');
// console.log(heading.innerText); 
// console.log(heading.innerText = "Peter"); 
// console.log(heading.innerHTML); 
// console.log(heading.innerHTML = "<u>Peter</u>"); 

// Manipulating Attributes 
// let img = document.querySelector('img');
// console.log(img); 
// img.getAttribute('id'); // To get the value
// img.setAttribute('id','value'); // To update the value

// Manipulating Style
// let links = document.querySelectorAll('.box a');

// for (link of links) { // for of loop
//     link.style.color = "blue"; 
// } 

// for(let i=0; i<=links.length; i++) { 
//     links[i].style.color = "red";
// } 

// let heading = document.querySelector('h1');
// console.log(heading); 
// console.log(heading.style.color = "yellow");
// console.log(heading.style.backgroundColor = "blue"); 

// classList Property - used to check classes defined in an object and classlist is also used for multiple classes fro styling
// let img = document.querySelector('img');
// console.log(img); 
// console.log(img.classList); 

// let heading = document.querySelector('h1');
// console.log(heading);
// console.log(heading.classList); 

// classList.add() - it adds multiple classes
// heading.classList.add("abc"); 
// heading.classList.add("green");
// heading.classList.add("underline"); 

// classList.remove() - it removes classes
// heading.classList.remove("abc");
// heading.classList.remove("underline")

// classList.contains() - it checks class exists or not if class exists return true otherwise false 
// console.log(heading.classList.contains("green"));
// console.log(heading.classList.contains("underline")); 

// classList.toggle() - to toggle between add & remove, if added will return true, if removed will return false
// console.log(heading.classList.toggle("green")); 
// console.log(heading.classList.toggle("green"));
// console.log(heading.classList.toggle("underline"));
// console.log(heading.classList.toggle("underline")); 
// console.log(heading.classList.toggle("abc")); 
// console.log(heading.classList.toggle("abc")); 

// Navigation - used to know child and parent elements, with the help of navigation we can go from one element to another element
// let h4 = document.querySelector('h4'); 
// console.dir(h4.parentElement); // h4 element is a child element and its parent element is div box

// let ul = document.querySelector('ul');
// console.dir(ul.parentElement); // ul element is a child element and its parent element is div box

// let li = document.querySelector('li');
// console.dir(li.parentElement); // li element is a child element and its parent element is ul

// console.log(ul.children); // ul is a parent element and li is a child element  
// console.log(ul.childElementCount); 
// console.log(ul.children[0]); 
// console.log(ul.children[1]); 
// console.log(ul.children[2]); 

// console.log("----Siblings-----");

// console.log(ul.children[0].previousElementSibling);
// console.log(ul.children[1].nextElementSibling); 
// console.log(ul.children[2].previousElementSibling); 

// let box = document.querySelector('.box'); // box is a parent element and there childrens are h4 and ul
// console.log(box.children);
// console.log(box.childElementCount); // it counts the no of child elements

// Adding Elements on Page
// console.dir(document.createElement('p'));
// let newP = document.createElement('p');
// console.dir(newP);
// newP.innerText = "Hi, I am a new p";
// console.log(newP); 

// let box = document.querySelector('.box');
// console.log(box); 
// console.log(appendChild(newP));

// Removing Elements
// let body = document.querySelector('body');
// console.log(body);
// console.log(body.remove());

// ----------------------------------------------------------

// Practice Questions 

// Practice Questions 1  
// let para1 = document.createElement('p');
// para1.innerText = "Hey,I am red"; 
// document.querySelector("body").append(para1);
// para1.classList.add("red");   

// Practice Questions 2
// let h3 = document.createElement('h3');
// h3.innerText = "I am blue h3";
// document.querySelector("body").append(h3);

// h3.classList.add("blue"); 

// Practice Questions 3
// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I'm in a div";
// para2.innerText = "ME TOO";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");

// document.querySelector("body").append(div);

// ----------------------------------------------------------

// DOM Events 

// onclick event - with the help of onclick we can call only 1 function 
// onmouseenter event - with the help of onmouseenter event we need to drag the cursor to the button then it will give the print the value

// let btn = document.querySelector("button"); // this is for only single button
// console.dir(btn); 

// let btns = document.querySelectorAll("button"); // this is for multiple buttons

// for(btn of btns) {
//     btn.onclick = sayHello; // At one time only one function will be called 
//     // btn.onclick = sayName; // At one time only one function will be called 
//     btn.onmouseenter = function () {
//         console.log("you entered a button");
//     }
//     console.dir(btn); 
// }

// btn.onclick = function() {
//     console.log("button was clicked");
//     //alert("button was clicked");
// }    

// function sayHello() { // At one time only 1 function will be called not 2 
//     alert("Hello"); 
// }

// btn.onclick = sayHello; // this will print Hello only for one time after clicking on Click me 1 button 

// function sayName() { // At one time only 1 function will be called not 2 
//     alert("Makarand Patil"); 
// } 

// Event Listeners - With the help of event listeners we can call / execute multiple functions 
// let btns = document.querySelectorAll("button");

// for(btn of btns) { 
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function() {
//         console.log("you double clicked me");
//     });
// }  

// function sayHello() {
//     alert("Hello"); 
// } 

// function sayName() {
//     alert("Makarand Patil"); 
// } 

// Activity based on Event Listeners
// let btn = document.querySelector("button"); 

//  btn.addEventListener("click", function() {
//  console.log("random color generated");
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
    
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
//     div.style.color = "white";

//        console.log("color updated");
// }) 

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color; 
// } 

// Event Listeners for Elements
// let p = document.querySelector("p");

// p.addEventListener("click",function() { 
//     console.log("para was clicked");
// }) 

// this in Event Listener - this keyword is mostly used when there multiple objects in single event listener
    // let btn = document.querySelector("button");
    // btn.addEventListener("click", function(){
    //     console.dir(this.innerText);
    //     this.style.backgroundColor = "red";
    // }) 
    // let btn = document.querySelector("button");
    // let p = document.querySelector("p");
    // let h1 = document.querySelector("h1");
    // let h3 = document.querySelector("h3"); 

    // function changeColor() { 
    //     console.dir(this.innerText);
    //     this.style.backgroundColor = "red";
    //     this.style.color = "white";
    //     this.style.border = "none"; 
    // } 

    // btn.addEventListener("click", changeColor);

    // p.addEventListener("click", changeColor);

    // h1.addEventListener("click",changeColor);

    // h3.addEventListener("click",changeColor);

// Keyboard Events :- keydoqn - a event used when a key is pressed
//                    keyup - a event used when a key is released
//                    keyleft - a event when is moved to left
//                    keyright - a event when is moved to right 

// let inp = document.querySelector("input");

// keydown - a event used when a key is pressed
// inp.addEventListener("keydown", function(event) {
    // console.log(event); // in the keyboard event there is key which is visible on screen and its code is given to us

    // console.log("code = ",event.code); // ArrowUp, ArrowDown, ArrowLeft, ArrowRight
    // if(event.code == "ArrowUp") { 
    //     console.log("character moves forward");
    // } 
    // else if(event.code == "ArrowDown") {
    //     console.log("character moves backward")
    // }
    // else if(event.code == "ArrowLeft") {
    //     console.log("character moves left")
    // }
    // else if(event.code == "ArrowRight") {
    //     console.log("character moves right")
    // } 
    
    // console.log("key = ", event.key); 
    // console.log("code = ", event.code);
    // console.log("key was pressed"); 
// }) 

// keyup - a event used when a key is released
// inp.addEventListener("keyup", function() {
//     console.log("key was released");
// })

// Form Events 
// let form = document.querySelector("form");

// form.addEventListener("submit", function() {
//     event.preventDefault(); // it prevents to not go on the url after clicking ok button
//     alert("form submitted"); 
// }) 

// Extracting from data
// let form = document.querySelector("form");

// form.addEventListener("submit", function() {
//     event.preventDefault(); 

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     console.log("username = ",user.value);
//     console.log("password = ",pass.value);
//     alert(`Hi ${user.value} your password is set to ${pass.value}`);
    // let inp = document.querySelector("input");
    // console.dir(inp); 
    // console.dir(inp.value);
//})

let btn = document.querySelector("button"); 
btn.addEventListener("click",function() {
    console.log("clicked me");
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
})
