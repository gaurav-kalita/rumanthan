const img = document.querySelectorAll('.glider img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let slideindex = 0;

//codes for slide show
const showSlide = () =>{
    for (let index = 0; index < img.length; index++) {
        img[index].style.display = 'none';
    }

    slideindex++;

    if (slideindex > img.length) {
        slideindex = 1;
    }
    img[slideindex - 1].style.display = 'block';
    setTimeout(showSlide, 14000);
};

showSlide();

showSlides(slideindex);

function plusSlides(n) {
  showSlides(slideindex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("img");
 
  if (n > slides.length) {slideindex = 1}    
  else if (n < 1) {slideindex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
 
  slides[slideindex-1].style.display = "block";
}



// Codes for mobile version
let menuopen = false;
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav_links');  
const cross =  document.querySelector('.cross');
const logo =  document.querySelector('.logo'); 


// media query to stop auto opening of navbar
var x = window.matchMedia("(max-width: 900px)")
if(x.matches){
(function() {
    nav.style.display = "none";
})()};


//toggle the hamburger menu
burger.addEventListener('click', ()=>{
    if(!menuopen){
        nav.classList.toggle('nav-active');
        burger.style.display = 'none';
        cross.style.display = "block";
        menuopen = true;
        nav.style.display='flex';
    }
    else{
    menuopen = false;
    }
});

cross.addEventListener('click', ()=>{
    if(menuopen){
        nav.classList.toggle('nav-active');
        burger.style.display = 'block';
        cross.style.display = "none";
        menuopen = false;
    }
    else{
    menuopen = true;
    }
});
