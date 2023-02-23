const getButton1 = document.querySelector("#b1");
const getButton2 = document.querySelector("#b2");
const getButton3 = document.querySelector("#b3");
const getButton4 = document.querySelector("#b4");
const getButton5 = document.querySelector("#b5");
const menuItem1 = document.querySelector(".menu-item1");
const menuItem2 = document.querySelector(".menu-item2");
const menuItem3 = document.querySelector(".menu-item3");
const menuItem4 = document.querySelector(".menu-item4");
const menuItem5 = document.querySelector(".menu-item5");
const span1 = document.querySelector("#li1>span");
const span2 = document.querySelector("#li2>span");
const span3 = document.querySelector("#li3>span");
const span4 = document.querySelector("#li4>span");
const span5 = document.querySelector("#li5>span");

// console.log(menuItem2);


var isClick = false;


getButton1.addEventListener("click", function(e) {

    if(menuItem1.style.visibility != 'unset') {
    
    menuItem1.style.visibility = 'unset';

    }else {

    menuItem1.style.visibility = '';

    }

   if(span1.innerHTML=='<img src="https://img.icons8.com/ios-filled/50/null/sort-down.png">') {
    span1.innerHTML='<img src="https://img.icons8.com/ios-filled/50/null/sort-up.png"/>';
   }else{
    span1.innerHTML='<img src="https://img.icons8.com/ios-filled/50/null/sort-down.png">'
   }


    
})
getButton2.addEventListener("click", function(e) {
    
    if(menuItem2.style.visibility != 'unset') {
    
        menuItem2.style.visibility = 'unset';
    
        }else {
    
        menuItem2.style.visibility = '';
    
        }
    
   if(span2.innerHTML=='<img src="https://img.icons8.com/ios-filled/50/null/sort-down.png">') {
    span2.innerHTML='<img src="https://img.icons8.com/ios-filled/50/null/sort-up.png"/>';
   }else{
    span2.innerHTML='<img src="https://img.icons8.com/ios-filled/50/null/sort-down.png">'
   }


    
})
getButton3.addEventListener("click", function(e) {
    
    if(menuItem3.style.visibility != 'unset') {
    
        menuItem3.style.visibility = 'unset';
    
        }else {
    
        menuItem3.style.visibility = '';
    
        }
    
    
   if(span3.innerHTML=='<img src="https://img.icons8.com/ios-filled/50/null/sort-down.png">') {
    span3.innerHTML='<img src="https://img.icons8.com/ios-filled/50/null/sort-up.png"/>';
   }else{
    span3.innerHTML='<img src="https://img.icons8.com/ios-filled/50/null/sort-down.png">'
   }


    
})
getButton4.addEventListener("click", function(e) {
    
    if(menuItem4.style.visibility != 'unset') {
    
        menuItem4.style.visibility = 'unset';
    
        }else {
    
        menuItem4.style.visibility = '';
    
        }
    
   if(span4.innerHTML=='<img src="https://img.icons8.com/ios-filled/50/null/sort-down.png">') {
    span4.innerHTML='<img src="https://img.icons8.com/ios-filled/50/null/sort-up.png"/>';
   }else{
    span4.innerHTML='<img src="https://img.icons8.com/ios-filled/50/null/sort-down.png">'
   }


    
})
getButton5.addEventListener("click", function(e) {
    
    if(menuItem5.style.visibility != 'unset') {
    
        menuItem5.style.visibility = 'unset';
    
        }else {
    
        menuItem5.style.visibility = '';
    
        }
    
    
   if(span5.innerHTML=='<img src="https://img.icons8.com/ios-filled/50/null/sort-down.png">') {
    span5.innerHTML='<img src="https://img.icons8.com/ios-filled/50/null/sort-up.png"/>';
   }else{
    span5.innerHTML='<img src="https://img.icons8.com/ios-filled/50/null/sort-down.png">'
   }


    
})



