// Simon Says Game - Mini Project 
let gameSeq = [];
let userSeq = [];

let btns = ["red","blue","green","yellow"];

let started = false; // this means game is not started that is why it returns false  
let level = 0; 

let h2 = document.querySelector("h2");

// Starting a game 
document.addEventListener("keypress", function() { // Here is the code of starting a game 
    if (started == false) { 
        console.log("game is started");
        started = true; 

        levelUp(); 
    } 
})  

// Flash Buttons and Level Up
function gameFlash(btn) { // Here is the code of flash that will flash white color
    btn.classList.add("gameflash"); 
    setTimeout (function () {
        btn.classList.remove("gameflash");
    },200); 
} 

function userFlash(btn) { // Here is the code of flash that will flash green color
    btn.classList.add("userflash"); 
    setTimeout (function () {
        btn.classList.remove("userflash");
    },200); 
} 

function levelUp() { // Here is the code of changing the levels means h2 element 
    userSeq = []; // here color we have to select as per the game sequence if any wrong select then it will print game over
    level++;
    h2.innerText = `Level ${level}`;    

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn); 
    gameSeq.push(randColor);
    console.log(gameSeq); 
    gameFlash(randBtn); 
}   

// Button Event Listeners
// Mathcing Sequence
function checkAns(idx) { // to check the color is matching to game sequence or not
   // console.log("curr level : ", level);
   // let idx = level - 1;

    if(userSeq[idx] === gameSeq[idx]) { // sequence check
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000); 
        } 
       // console.log("same value");
    } else { 
        h2.innerHTML = `Game Over!Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150);  
        reset(); 
    }
} 
function btnPress() {
    //console.log("btn was pressed");
    console.log(this); // it tells which type of button is clicked 
    let btn = this;
    userFlash(btn);
     
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userColor); 
    checkAns(userSeq.length-1);
} 

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
} 

// Reset Game
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}