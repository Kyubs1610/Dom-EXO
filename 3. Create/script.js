// parent Element
const parent = document.getElementsByTagName('main');
const learners = ["Estime","Ben","Egide","Diego"];

// fonction to sort the learners
learners.sort(() => Math.random() - 0.4);

// create new part
for (let learner of learners) {
    let newSection = document.createElement('p');
    newSection.textContent=learner;

// By accessing the element at index 0 of the NodeList we got a DOM element, on which we can safely call the appendChild method.

parent[0].appendChild(newSection)


let r =Math.floor(Math.random () * 255);
let g =Math.floor(Math.random () * 255);
let b =Math.floor(Math.random () * 255);

newSection.style.background = "rgb(" + r + ", " + g + ", " + b + ")"
newSection.style.color = ((0.3 * r) + (0.59 * g) + (0.11 * b) <= 128) ? '#FFF' : '#000';

}











