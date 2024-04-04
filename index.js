const slides= document.querySelector(".slides")
let slideIndex = 0;
let intervelId = null;

//initializeSlider()
document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider(){

    slides[slideIndex].classList.add("displaySlide");
    intervelId = setInterval(nextSlide, 5000);
    
}

function showSlide(index){

}

function prevSlide(){

}

function nextSlide(){

}