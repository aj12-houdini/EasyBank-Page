const collapse = document.querySelector(".collapse-img")
const nav = document.querySelector(".nav-bar-list")
const close = document.querySelector(".close")
const homeSection = document.querySelector(".home-section")
collapse.addEventListener("click",function(){
        close.classList.add("active")
        nav.classList.add("responsive")
})

close.addEventListener("click",function(){
    close.classList.remove("active")
    nav.classList.remove("responsive")
})

