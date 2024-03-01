let close = document.querySelector(".div_nav_menu_menu_btn");
let nav = document.querySelector(".div_nav_menu");
let burger = document.querySelector('.burger_menu');

nav.addEventListener("click", function(){
    nav.classList.add("d-none")
})

burger.addEventListener("click", function(){
    nav.classList.remove("d-none")
})
