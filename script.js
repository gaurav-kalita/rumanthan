const img = document.querySelectorAll('.glider img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let slideindex = 0;

const showSlide = () =>{
    for (let index = 0; index < img.length; index++) {
        img[index].style.display = 'none';
    }

    slideindex++;

    if (slideindex > img.length) {
        slideindex = 1;
    }
    img[slideindex - 1].style.display = 'block';
    setTimeout(showSlide, 7500);
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

