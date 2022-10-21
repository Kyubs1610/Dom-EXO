// Use childNodes to list all the children from the <ul>

const childNodes = document.querySelector('ul').querySelectorAll("li")
console.log (childNodes)

//Write a for loop to iterate over every child. In this loop:
// - Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1) :
let child = document.querySelectorAll('li');
for (let variant of child) {
    console.log(variant.innerHTML);
    
} 

// - Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list :


const li = document.querySelectorAll("li");
li[5].parentNode.insertBefore(li[5], li[0]); 



// - Since Fast and Furious is the most important franchise ever, add a class .important to the element :

li[5].classList.add("important")

// - Add an eventListener on every item of the list. If the item is clicked an alert() pops up to display the name of clicked element :





// - Add a special condition to the previous function if the clicked item is Fast and Furious the alert() should display The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family:

// - (*difficult*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful):
