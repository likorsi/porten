'use strict'

function changeContentForDevice() {
    const elementsMobileOff = document.querySelectorAll(".mobile-off")
    const elementsMobileOn = document.querySelectorAll(".mobile-on")
    const carouselOn = document.querySelectorAll(".carousel")
    const carouselOff = document.querySelectorAll(".carousel-off")

    if (window.matchMedia("(max-width: 1810px) and (min-width: 1201px)").matches
        || window.matchMedia("(max-width: 600px)").matches) {
        carouselOn.forEach(elem => elem.classList.remove("visually-hidden"))
        carouselOff.forEach(elem => elem.classList.add("visually-hidden"))
    } else {
        carouselOff.forEach(elem => elem.classList.remove("visually-hidden"))
        carouselOn.forEach(elem => elem.classList.add("visually-hidden"))
    }

    if (window.matchMedia("(max-width: 600px)").matches) {
        elementsMobileOff.forEach(elem => elem.classList.add("visually-hidden"))
        elementsMobileOn.forEach(elem => elem.classList.remove("visually-hidden"))
    } else {
        elementsMobileOff.forEach(elem => elem.classList.remove("visually-hidden"))
        elementsMobileOn.forEach(elem => elem.classList.add("visually-hidden"))
       }

}

function changeSlideWidth() {
    slideWidth = carousel.children.item(0).offsetWidth
    wrapper = document.querySelector(".carousel-wrapper")
    wrapper.style.minWidth = slideWidth + 'px'
}

changeContentForDevice()
window.addEventListener("resize", changeContentForDevice)


let btnNext = document.querySelector(".next")
let btnPrev = document.querySelector(".prev")
let carousel = document.querySelector(".carousel-gallery")
let wrapper = document.querySelector(".carousel-wrapper")
let slideWidth = carousel.children.item(0).offsetWidth
let position = 0;

wrapper.style.minWidth = slideWidth + 'px'
window.addEventListener("resize", changeSlideWidth)



btnPrev.onclick = function() {
    position += slideWidth;
    position = Math.min(position, 0)
    carousel.style.marginLeft = position + 'px'
};

btnNext.onclick = function() {
    position -= slideWidth;
    position = Math.max(position, -slideWidth * (carousel.children.length - 1))
    carousel.style.marginLeft = position + 'px'
}