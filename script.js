// ==========================
// LANGUAGE SWITCH
// ==========================

function changeLanguage(language){

const elements=document.querySelectorAll(".lang");

elements.forEach(function(element){

if(language==="sq"){

element.innerHTML=element.getAttribute("data-sq");

}

else{

element.innerHTML=element.getAttribute("data-en");

}

});

}



// ==========================
// HEADER SCROLL
// ==========================

window.addEventListener("scroll",function(){

const header=document.getElementById("header");

if(window.scrollY>50){

header.style.background="#ffffff";

header.style.boxShadow="0 8px 20px rgba(0,0,0,.15)";

}

else{

header.style.background="rgba(255,255,255,.95)";

header.style.boxShadow="0 5px 15px rgba(0,0,0,.08)";

}

});



// ==========================
// MOBILE MENU
// ==========================

const menu=document.querySelector(".menu");

const nav=document.querySelector("nav");

menu.addEventListener("click",function(){

nav.classList.toggle("show");

});



// ==========================
// SCROLL ANIMATION
// ==========================

const observer=new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".card,.why-box,.gallery-grid img,.about-image,.about-text").forEach(function(item){

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition="all .7s ease";

observer.observe(item);

});