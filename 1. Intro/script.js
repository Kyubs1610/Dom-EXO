document.querySelector('title')

// console.log (title)

document.title ="Modifying the DOM";

// console.log (title)



let r =Math.floor(Math.random () * 255);
let g =Math.floor(Math.random () * 255);
let b =Math.floor(Math.random () * 255);

document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

const collection = document.body.children;
for (const element of collection)
console.log(element)

/* fin Intro */
