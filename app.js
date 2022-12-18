const burger = document.querySelector(".nav_menu")
const menu = document.querySelector(".nav_logo ul")

burger.addEventListener("click", function(){
    menu.classList.toggle("nav_active")
})

$('.min').slick();