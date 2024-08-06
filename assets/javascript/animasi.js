document.addEventListener("DOMContentLoaded", function() {
    // Animasi untuk elemen dengan ID centeredContent
    var centeredContent = document.getElementById("centeredContent");
    centeredContent.classList.add("animate__animated", "animate__fadeIn");

    // animasi image
    var image = document.querySelector("#centeredContent img");
    image.classList.add("animate__animated", "animate__zoomIn");

    var h1Element = document.querySelector("#centeredContent h1");
    h1Element.classList.add("animate__animated", "animate__fadeInDown");

    var pElement = document.querySelector("#centeredContent p");
    pElement.classList.add("animate__animated", "animate__fadeInUp");
});

document.addEventListener("DOMContentLoaded", function() {
    // Animasi untuk tombol Home
    var homeButton = document.querySelector(".home-button");
    homeButton.classList.add("animate__animated", "animate__fadeIn");
    homeButton.computedStyleMap.animationDuration ="2s" ; //waktu animasi
});