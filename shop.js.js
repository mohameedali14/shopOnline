let menu = document.querySelector(".links"),
menu_bar =document.querySelector(".bar"),
cancel =document.querySelector(".cancel");
menu_bar.onclick =()=>{
  menu.classList.add("active");
  menu_bar.classList.add("hide");
  cancel.classList.add("hide");


}
cancel.onclick =()=>{
  menu.classList.remove("active");
  menu_bar.classList.remove("hide");
  cancel.classList.remove("hide");

}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}

slides[slideIndex-1].style.display = "flex";
}