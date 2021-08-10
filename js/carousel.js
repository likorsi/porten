{
    'use strict'

    function changeSlideWidth() {
        slideWidth = carousel.querySelector('li').offsetWidth
        position = 0
        wrapper.style.width = slideWidth + 'px'
        carousel.style.marginLeft = 0
    }

    const carousel = document.querySelector(".carousel-gallery")
    let slideWidth = carousel.querySelector('li').offsetWidth
    let wrapper = document.querySelector(".carousel-wrapper")
    wrapper.style.width = slideWidth + 'px'
    let position = 0;

    changeSlideWidth()
    window.addEventListener("resize", changeSlideWidth)

    let btnNext = document.querySelector(".next")
    let btnPrev = document.querySelector(".prev")

    btnPrev.onclick = function() {
        position += slideWidth;
        position = Math.min(position, 0)
        carousel.style.marginLeft = position + 'px'
    };

    btnNext.onclick = function() {
        position -= slideWidth;
        position = Math.max(position, -slideWidth * (carousel.querySelectorAll('li').length - 1))
        carousel.style.marginLeft = position + 'px'
    }
}