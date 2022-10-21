const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}


const container = document.querySelector('.displayedsquare-wrapper')

// console.log(container)

//Everytime the user clicks on one of the action squares:

//Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  // add a new div
  const div = document.createElement("div"); 
  // click event
  div.addEventListener("click", (e) => {
 //Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square
    alert("The color of the square generated is " + e.target.classList[1])
  })
  container.appendChild(div);

  //add the class
  div.classList.add('displayedsquare');
  //give the color
  div.classList.add(e.target.classList[1])
  //Create a new <li> in the log below to state when the action was done

 const ul = document.querySelector('ul')
 const li = document.createElement("li")
 ul.appendChild(li)

 li.innerText = e.target.classList[1] + " " + getElapsedTime()

 

}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


//Add an event listener on the document <body>, listening for the keypress event. (hint: have a look at this)
//When the spacebar is hit randomly change the background color of the whole page


window.addEventListener('keypress', function(e) {
    if(e.key === " "){ 
        let r =Math.floor(Math.random () * 255);
        let g =Math.floor(Math.random () * 255);
        let b =Math.floor(Math.random () * 255);
        document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
})


//When the l key is pressed the log gets deleted (erases the generated <li>s).

//Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes), so a while loop might be a good choice instead.


window.addEventListener('keypress', function(e) {
    if(e.key === "l"){ 
        
        const rmv = document.querySelectorAll('ul'); 
             
    while (rmv.length > 0) {
  
            rmv[0].remove();
            rmv.remove(rmv[0]);
            
          }
        
}
})

//When the s key is pressed the squares get deleted (erases the generated squares)

window.addEventListener('keypress', function(e) {
  if(e.key === "s"){ 
      
      const rmv2 = document.querySelectorAll('.displayedsquare-wrapper'); 
           
  while (rmv2.length > 0) {

          rmv2[0].remove();
          rmv2.remove(rmv2[0]);
          
        }
      
}
})





