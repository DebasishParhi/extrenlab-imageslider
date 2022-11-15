let slide = 1;
showSlides(slide);

function rightslide(n) {
  showSlides(slide += n);
}

function currentSlide(n) {
  showSlides(slide = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("img");
  if (n > slides.length) {
    slide = 1
}
  if (n < 1) {
    slide = slides.length
}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slide-1].style.display = "block";
}