"use strict"

let color = document.getElementById('background');
let text = document.querySelector('h1');
let copy = document.querySelector('.copy');
let Regenerate = document.querySelector('.Regenerate');
let r = 90;
let g = 76;
let b = 76;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Regenerate.addEventListener('click', function() {
    r = getRandomInt(0,255);
    g = getRandomInt(0,255);
    b = getRandomInt(0,255);
    color.style.backgroundColor = `rgb(${r},${g},${b})`;
    text.textContent = `RGB: ${r}, ${g}, ${b}`;
})

copy.addEventListener('click', function(){
    navigator.clipboard.writeText(`${r},${g},${b}`);
    alert('Successfully copied!!!');
})
