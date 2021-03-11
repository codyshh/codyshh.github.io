/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
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
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

var quotes = [
  'a shirt fit for a pirate grandpa',
  'a skirt your mom would have worn to the mall in 1984',
  'a vest that would make a fisherman jealous',
  'big clunky shoes to stomp around in',
  'a long flowy dress that may or may not be haunted',
  'a wall hanging that reminds you of the Space Race',
  'a ratty t-shirt that says AC/DC with the Australian pronunciation (AccaDacca)',
  'Harley Davidson brand cullotes',
  'Orange Tab levis that fit your butt perfectly but have a mysterious stain',
  'dansko clogs that say built for riverdance across the toes',
  'a cursed teddy bear sweater',
  'a sweatshirt that says Born to Be Cozy on the front, and Forced to Be Awake on the back'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]; }