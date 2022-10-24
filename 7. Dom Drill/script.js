// Use childNodes to list all the children from the <ul>

const childNodes = document.querySelector('ul').querySelectorAll("li")
// console.log (childNodes)

//Write a for loop to iterate over every child. In this loop:
// - Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1) :
const li = document.querySelectorAll('li');
for (let variant of li) {
    // console.log(variant.innerHTML);
    
} 

// - Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list :



li[5].parentNode.insertBefore(li[5], li[0]); 



// - Since Fast and Furious is the most important franchise ever, add a class .important to the element :

li[5].classList.add("important")

// - Add an eventListener on every item of the list. If the item is clicked an alert() pops up to display the name of clicked element :
// - Add a special condition to the previous function if the clicked item is Fast and Furious the alert() should display The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family:




li.forEach(function (film) {
    film.addEventListener("click", () => {
      alert(film.textContent);
  
      if (film.textContent === "Fast and Furious") {
        alert(
          "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
        );
      }
    });
  });


// - (*difficult*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful):


const final =li[2].isEqualNode(li[10]);


function rmv() {
    final.removeChild(li);
}

// (*) Add an eventListener on the document body, listening for keyup. When pressing the r key of the keyboard the list should get sorted in a random order, however Fast and Furious should remain the first element (most important franchise ever, remember?)
// (*) Modify the previous function so that when you press the letter d of your keyboard, the Fast and Furious element gets cloned


// Create a new <div> before the list, using createElement and insertBefore

const newDiv = document.createElement('div')
document.body.insertBefore(newDiv, document.body.children[1])



// Using createElement, create a <select> tag into the previously created <div>, with two <option>s in it: "important franchises" and "normal franchises"

const select = document.createElement('select')
newDiv.appendChild(select)

const opt0 = document.createElement('option')
const opt1 = document.createElement('option');
const opt2 = document.createElement('option');

opt0.value = '0';
opt0.text = 'Choose a franchise'

opt1.value = "1";
opt1.text = "Important Franchise";

opt2.value = '2';
opt2.text = "Normal Franchise";

select.add(opt0, null);
select.add(opt1, null);
select.add(opt2, null);


// Add an eventListener to the <select>, on change, if the option "important franchise" is chosen, only display items of the list that have the class .important. (hint: you can toggle visibility using element.style.visibility = 'hidden')


select.addEventListener('change', function(){
      if(select.value === "2") {
        document.querySelector("li.important").style.visibility = "hidden";
      } 


      if (select.value === "1") {
        const film = document.querySelectorAll("li:not(.important)")
        console.log(film)
        for (var i=0;i<film.length;i+=1){
          film[i].style.display = 'none';
        }
      
      }
        
        
      else if (select.value === "0") {
        document.querySelector("li:not(.important)").style.visibility ='visible';
        document.querySelector("li.important").style.visibility = "visible";
      }
    });