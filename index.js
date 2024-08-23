let bars = document.querySelector(".icon_1");
let Mark_x = document.querySelector(".fa-xmark");
let toggleMenu = document.querySelector(".toggle_menu")

bars.addEventListener("click",()=>{
    bars.classList.toggle("fa-xmark");
    toggleMenu.classList.toggle("toggle")
    
})
