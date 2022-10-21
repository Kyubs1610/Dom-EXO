//Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. 
//The content of the field and the span should always remain the same.

const firstN = document.getElementById('display-firstname'); 

const firstNameInput = document.getElementById('firstname'); 

    firstNameInput.addEventListener('keyup', function(){
    firstNameInput.innerText = firstN.value;
               
    });  

    console.log(firstNameInput.value);

//Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, 
//otherwise show them this hard to swallow fact.

const number = document.getElementById('age');
const truth = document.getElementById('a-hard-truth');

number.addEventListener('keyup', function(){
    if(number.value >= 18 ){
        truth.style.visibility = 'visible';
    }else{  
        truth.style.visibility = 'hidden';  
    }
           
}); 

//Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.

const pswd1 = document.getElementById('pwd');
const pswd2 = document.getElementById('pwd-confirm');



const passwordCheck = function(){
    if (pswd1.value.length < 6)  {
        pswd1.style.background = "red";
        
    }

    else{
        
        pswd1.style.background = "white";
        
    }

    if (pswd2.value.length < 6) {
        pswd2.style.background = "red";
      
    }
    else{
        pswd2.style.background = "white";
        
    }
    if(pswd1.value !== pswd2.value){
        pswd1.style.background = "red";
        pswd2.style.background = "red";
        
    }
    else{
        pswd1.style.background = "white";
        pswd1.style.background = "white";
        alert("Your password is awesome")
    }

}

pswd2.addEventListener('keyup', function(){
    passwordCheck();
});




//Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. 
//For ease of use, we'll say that the dark mode is just turning the background black and the text white.

const DLMode= document.getElementById('toggle-darkmode');



DLMode.addEventListener('change', function(){
    if(DLMode.value === "dark") {
        document.body.style.background = "black"
        document.body.style.color = "white"
        
    } else {
        document.body.style.background = "white"
        document.body.style.color = "black"
       
    }
  
});