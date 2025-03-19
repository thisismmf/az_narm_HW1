var slideIndex = 0;
showSlides(slideIndex);
showNextSlide();

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].style.display = "flex";
  for (var i = 0; i < slides.length; i++) {
    if (i != slideIndex) slides[i].style.display = "none";
  }
}

function showNextSlide() {
  setTimeout(showNextSlide, 3000);
  slideIndex++;
  showSlides(slideIndex);
}