// ==========================
// LANGUAGE SWITCH
// ==========================

function changeLanguage(lang) {

    document.documentElement.lang = lang;

    const elements = document.querySelectorAll(".lang");

    elements.forEach(function (element) {

        if (lang === "sq") {

            element.textContent = element.dataset.sq;

        } else {

            element.textContent = element.dataset.en;

        }

    });

}



// ==========================
// MOBILE MENU
// ==========================

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", function () {

    nav.classList.toggle("show");

});



// Mbyll menunë pasi klikohet një link

document.querySelectorAll("nav a").forEach(function(link){

    link.addEventListener("click",function(){

        nav.classList.remove("show");

    });

});



// ==========================
// HEADER EFFECT
// ==========================

window.addEventListener("scroll", function () {

    const header = document.getElementById("header");

    if (window.scrollY > 60) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.12)";

    } else {

        header.style.background = "rgba(255,255,255,.96)";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";

    }

});



// ==========================
// ACTIVE MENU
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
