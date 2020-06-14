// home page slider
var swiper1 = new Swiper('.swiper1', {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: 'fade',
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// sticky nav-bar
  window.addEventListener("scroll", function(){

    var header = document.querySelector(".navi");
    var links = document.querySelectorAll('.home, .work,.about,.contactus,.workcontent li,.workcontent a');
    console.log(links);
    // var workli = document.querySelectorAll('.workli');
    var log = document.querySelector(".logo")

    header.classList.toggle("navi-active", window.scrollY > 300);

    links.forEach(myfunction);
    function myfunction(items){
    items.classList.toggle("navi-active2", window.scrollY > 300);

  }
  })



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

// swiper for the instagram images

var swiper2 = new Swiper('.swiper2', {
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 1,
  mode:'horizontal',
  freeMode: true,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3400,
  },
  breakpoints: {
    700: {
      slidesPerView: 4,
      spaceBetween: 30,
    },},
  breakpoints: {
    1400: {
      slidesPerView: 5,
      spaceBetween: 30,
    },}
});

// codes for instafeed to get image

// var galleryfeed = new Instafeed({
//   get: "user",
//   userId: 3250465243,
//   accessToken:"",
//   resolution: "standard_resolution",
//   userHTTP: "true",
//   limit: 6,
//   template: '<img src="{{image}}" class = "img-responsive">',
//   target: "instafeed-gallery",
// });

// galleryfeed.run();

// Scroll out animation
AOS.init();
