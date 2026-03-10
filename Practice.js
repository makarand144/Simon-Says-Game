// console.log(window);
// console.dir(document);
// console.dir(document.all);
// console.dir(document.all[10]);
// console.log(document.all[10].innerText);
// console.log(document.all[10].innerText = "Peter Parker");

// Selecting Elements

// getElementById()
// console.log(document.getElementById("id")); 
// console.log(document.getElementById("mainImg")); 
// let imgObj = document.getElementById("description"); 
// console.log(imgObj);
// console.log(imgObj.height);
// console.log(imgObj.width);
// console.log(imgObj.tagName);
// console.log(imgObj.id);
// console.log(imgObj.src = "Amazing_Fantasy.jpg");

// getElementsByClassName()
// console.log(document.getElementsByClassName("oldImg"));
// console.log(document.getElementsByClassName("oldImg")[0]);
// console.log(document.getElementsByClassName("oldImg")[1]);
// console.log(document.getElementsByClassName("oldImg")[2]);

let smallImages = document.getElementsByClassName("oldImg");

for(let i=0; i<smallImages.length; i++) {
    smallImages[i].src = "Spiderman.png";
    console.log(`value of image no. ${i} to be changed.`);
    // console.dir(smallImages[i].src); 
}