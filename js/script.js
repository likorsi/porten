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
    slideWidth = carousel.querySelector('li').offsetWidth
    let wrapper = document.querySelector(".carousel-wrapper")
    position = 0
    wrapper.style.width = slideWidth + 'px'
    carousel.style.marginLeft = 0
}

function makeCardProductTemplates(parent, template, number) {
    for (let i = 0; i < number; i++) {
        let element = template.cloneNode(true)
        element.href = "#"
        element.className = "link-card-product"
        element.querySelector("p").innerHTML = `Louis XVI ATHOS<br>165 000 руб.`
        let img = element.querySelector("img")
        img.src = "./static/img/wrist-watch.png"
        img.alt = "наручные часы Louis XVI ATHOS"
        parent.appendChild(element)
    }
}

function makeBrandsTemplates(parent, template, number) {
    for (let i = 0; i < number; i++) {
        let element = template.cloneNode(true)
        let img = element.querySelector("img")
        img.src = "./static/img/brand.svg"
        img.alt = "логотип бренда Cocofine Jewelry"
        parent.appendChild(element)
    }
}

let template = document.querySelector("#card-product-template").content.querySelector('a')
let parent = document.querySelector(".new-collection .card-product")
makeCardProductTemplates(parent, template, 3)
parent = document.querySelector(".goods > .card-product")
makeCardProductTemplates(parent, template, 8)
template = document.querySelector("#card-product-template-li").content.querySelector('li')
parent = document.querySelector(".carousel-gallery")
makeCardProductTemplates(parent, template, 3)
parent = document.querySelector(".brands ul")
template = document.querySelector("#brands-template").content.querySelector('li')
makeBrandsTemplates(parent, template, 4)

changeContentForDevice()
window.addEventListener("resize", changeContentForDevice)

let carousel = document.querySelector(".carousel-gallery")
let slideWidth = carousel.querySelector('li').offsetWidth
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
    position = Math.max(position, -slideWidth * (carousel.children.length - 1))
    carousel.style.marginLeft = position + 'px'
}