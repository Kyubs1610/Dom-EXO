
//Select the last child of the <ol> tag and put it at the beginning of the list

const list = document.querySelector('ol')
const a = list.lastElementChild
const b = list.firstElementChild

b.appendChild(a)
// last child will go on 2nd place (position [1]) so we need to use insertBefore to switch

list.insertBefore(a,list.firstElementChild)

//___________________________________________________________________________________________
//Move the <h2> of the third section in the second one and vice-versa
const sections = document.querySelectorAll("section");

// console.log(titlehdeux)



const title1 = sections[1].children[0]
// console.log(title1)
const title2 = document.querySelector("div > h2")
// console.log(title2)

// Select the 2 h2 
sections[1].insertBefore(title2,title1)

// define the div in order to switch the title in the good place
const divhDeux = sections[2].children[0]
// console.log (divhDeux)

// add the title 1 to the divhDeux but it will be the last child as default
divhDeux.appendChild(title1)

// define lorem part
const lorem = divhDeux.firstElementChild
// console.log(lorem)


// Insert what (container) ? before what (dans le contenant) ? (order)
divhDeux.insertBefore(title1,lorem)

//_____________________________________________________________________________________________

// Delete the last section from the DOM, we don't need it anyways

const rmv = document.querySelector('section:last-child');
console.log(rmv)
rmv.parentElement.removeChild(rmv);