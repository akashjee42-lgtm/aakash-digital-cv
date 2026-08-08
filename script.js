const text = [
    "HVAC Technician",
    "Pipe Fitter",
    "Mechanical Technician",
    "Maintenance Expert"
];

let index = 0;
let char = 0;
let current = "";
let typing = document.getElementById("typing");

function type(){

    if(index >= text.length){
        index = 0;
    }

    current = text[index];

    typing.innerHTML = current.substring(0,char++);

    if(char <= current.length){

        setTimeout(type,100);

    }else{

        char = 0;
        index++;

        setTimeout(type,1500);

    }

}

type();
// Dark Mode

const btn = document.getElementById("darkBtn");

btn.onclick = function(){

    document.body.classList.toggle("dark");

};
/* ===========================
   Scroll Reveal
=========================== */

const hiddenElements=document.querySelectorAll(".hidden");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach(el=>observer.observe(el));


/* ===========================
   Skill Animation
=========================== */

const bars=document.querySelectorAll(".value");

const skillObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

let width=entry.target.dataset.width;

entry.target.style.width=width;

}

});

});

bars.forEach(bar=>skillObserver.observe(bar));
/* ==========================
BACK TO TOP
========================== */

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}



/* ==========================
HAMBURGER
========================== */

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".nav-links");

menu.onclick=function(){

nav.classList.toggle("active");

}



/* ==========================
DARK MODE
========================== */

const dark=document.getElementById("darkBtn");

dark.onclick=function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        dark.innerHTML="☀️";

        localStorage.setItem("darkMode","on");

    }else{

        dark.innerHTML="🌙";

        localStorage.setItem("darkMode","off");

    }

};
/* ======================
LIGHTBOX
====================== */

const images=document.querySelectorAll(".gallery-img");

const lightbox=document.getElementById("lightbox");

const lightImg=document.getElementById("lightbox-img");

const close=document.getElementById("close");

images.forEach(img=>{

img.onclick=function(){

lightbox.style.display="flex";

lightImg.src=this.src;

}

});

close.onclick=function(){

lightbox.style.display="none";

}

lightbox.onclick=function(e){

if(e.target===lightbox){

lightbox.style.display="none";

}

}
const cursor=document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});