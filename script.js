'use strict'

function changeContentForDevice() {
    const elementsOff = document.querySelectorAll(".mobile-off");
    const elementsOn = document.querySelectorAll(".mobile-on");
    if (window.matchMedia("(min-width: 500px)").matches === false) {
        console.log("Screen width < 500px")
        elementsOff.forEach(elem => elem.classList.add("visually-hidden"))
        elementsOn.forEach(elem => elem.classList.remove("visually-hidden"))
    } else {
        console.log("Screen width > 500px")
        elementsOff.forEach(elem => elem.classList.remove("visually-hidden"))
        elementsOn.forEach(elem => elem.classList.add("visually-hidden"))
    }

}

changeContentForDevice()
window.addEventListener("resize", changeContentForDevice)
