
//Select the last child of the <ol> tag and put it at the beginning of the list

const list = document.querySelector('ol')
const a = list.lastElementChild
const b = list.firstElementChild

b.appendChild(a)
// last child will go on 2nd place (position [1]) so we need to use insertBefore to switch

list.insertBefore(a,list.firstElementChild)


//Move the <h2> of the third section in the second one and vice-versa
const titlehdeux = document.querySelectorAll("section");

// console.log(titlehdeux)



const title1 = titlehdeux[1].children[0]
console.log(title1)
const title2 = document.querySelector("div > h2")
console.log(title2)

// titlehdeux.insertBefore(title1,titlehdeux.children[])



title2.after(title1)

// title1.appendChild(title2)

// Delete the last section from the DOM, we don't need it anyways

// const rmv = document.querySelector('section:last-child');
// console.log(rmv)
// rmv.parentElement.removeChild(rmv);