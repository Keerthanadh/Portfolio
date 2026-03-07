/* Mobile Menu */

function toggleMenu(){
document.querySelector(".dropdown").classList.toggle("show");
}

/* Hamburger */

function hamburg(){
document.querySelector(".dropdown").classList.add("show");
}

function cancel(){
document.querySelector(".dropdown").classList.remove("show");
}

/* Typewriter Effect */

const textArray = [
"Electrical CAD Designer",
"Automation Engineer",
"Web Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let letter = "";

function type(){
if(index === textArray.length){
index = 0;
}

currentText = textArray[index];
letter = currentText.slice(0, ++charIndex);

document.querySelector(".typewriter-text").textContent = letter;

if(letter.length === currentText.length){
index++;
charIndex = 0;
setTimeout(type,1000);
}else{
setTimeout(type,80);
}
}

document.addEventListener("DOMContentLoaded",function(){
if(document.querySelector(".typewriter-text")){
type();
}
});