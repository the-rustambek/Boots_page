// const productItemElement= document.querySelectorAll(".products_item")

// const productButtonElements=document.querySelectorAll(".products_item button")

// productButtonElements.forEach(element =>{
//     element.addEventListener("click", event =>{
//         productItemElement.forEach(e =>e.classList.remove(".active"))
//        if (event.target.className= "boots_button"){
//            event.path[1].classList.add("active")
//        }
//        else{
//         event.path[2].classList.add("active")
//        }
//     })
// })


























































const productItemElements = document.querySelectorAll(".products_item")

const productButtonElements = document.querySelectorAll(".products_item button")

productButtonElements.forEach(element => {
    element.addEventListener('click', event => {
        const activeElements = document.querySelectorAll('.active')
        activeElements.forEach(e => {
            e.classList.remove('active')
            e.classList.add('sekin')
            setTimeout(() => {
                e.classList.remove('sekin')
            }, 1000)
        })
        if(event.target.className == "boots_button"){
            event.path[1].classList.add('active')
        } else {
            event.path[2].classList.add('active')
        }
    })
})