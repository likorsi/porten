{
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

    changeContentForDevice()
    window.addEventListener("resize", changeContentForDevice)
}