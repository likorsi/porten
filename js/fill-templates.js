{
    'use strict'

    function fillCardProductTemplate(parent, template, number) {
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

    function fillBrandsTemplate(parent, template, number) {
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
    fillCardProductTemplate(parent, template, 3)
    parent = document.querySelector(".goods > .card-product")
    fillCardProductTemplate(parent, template, 8)
    template = document.querySelector("#card-product-template-li").content.querySelector('li')
    parent = document.querySelector(".carousel-gallery")
    fillCardProductTemplate(parent, template, 3)
    parent = document.querySelector(".brands ul")
    template = document.querySelector("#brands-template").content.querySelector('li')
    fillBrandsTemplate(parent, template, 4)

}
