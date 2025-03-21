function transform(x) {
    x.classList.toggle("change");
    toggleMenu();
}
  
function toggleMenu(){
    let menu = document.querySelector("nav.menu");
    let layer = document.querySelector(".fade-layer");

    menu.classList.toggle("show");
    layer.classList.toggle("visible");
}

document.addEventListener("click", function (event) {
    let menu = document.querySelector("nav.menu");
    let menuButton = document.querySelector(".container");

    if (menu.classList.contains("show") && !menu.contains(event.target) && !menuButton.contains(event.target)) {
        transform(menuButton); 
    }
});

/* slideshows */
let slideIndex = [1, 1, 1, 1];
let slideId = ["slideshow_1", "slideshow_2", "slideshow_3", "slideshow_4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);


function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}