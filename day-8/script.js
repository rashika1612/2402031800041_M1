window.addEventListener("scroll", function(){

    let nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background = "black";

    }

    else{

        nav.style.background = "rgba(0,0,0,0.5)";

    }

});
let button = document.querySelector(".join-btn");

button.addEventListener("click", function(){

    alert("Welcome To FITZONE 🔥");

});