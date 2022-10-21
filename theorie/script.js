
setTimeout(() => {
    
const title = document.createElement("h1")
console.log(title)

title.innerText = "Hello mamen"
title.style.color = "red"
title.classList.add('nice-class')


const container = document.querySelector('.container')
container.appendChild(title)
console.log(title)

},5000);
