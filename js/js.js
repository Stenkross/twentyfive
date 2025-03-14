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

function popupp() {
    alert("Tack för bidragandet till hemsidan!");
  }
