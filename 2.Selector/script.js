// const titre = document.querySelectorAll(".important");
// titre.forEach ((e)=> {
//     e.title = 'ce titre est lo';
// });

// Display: none

var selectimg = document.querySelectorAll('img')
imglen = selectimg.length

for(i=0; i<imglen; i++) {

    if (selectimg[i].classList == ('important')) {}
    else {
       selectimg[i].style.display = "none";
    }
}

// Alternative

// const selectimg = document.querySelectorAll('img')
// imglen = selectimg.length

// selectimg.forEach ((e)=> {
//     if (e.classList == ('important')) {
        
//             } else {
                
//                e.style.display = "none";
//             }
// });

// Alternative

// let imach = document.querySelectorAll('img');
// for (let variant of imach){
//     if (imach.className == ('important')){
//     } else {
//             imach[1].style.display = "none";
//         }
//     }

//Alternative

let ps = document.querySelectorAll('p');
for (let variant of ps) {
    console.log(variant.innerHTML);
    console.log(variant.className)
} 



//Exo suivant (fonctionne pas problème avec tagName & Contains)




// let r =Math.floor(Math.random () * 255);
// let g =Math.floor(Math.random () * 255);
// let b =Math.floor(Math.random () * 255);

// let para = document.querySelectorAll('p')
// const color = document.getElementsByTagName('p')[i].style.color = 'rgb(' + r + ',' + g + ',' + b + ')';



// for (para of para){
//     if 
//     (para.classList.contains('.important').style.display = "none");
//     else{
//         color;
//     }}




