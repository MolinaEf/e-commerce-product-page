const navMenuBtn = document.getElementById("open-menu")
const navMenu = document.getElementById("nav-menu")

navMenuBtn.addEventListener("click", () => {
    console.log("clicked")
    navMenu.classList.toggle("hide")
    overlay.classList.toggle("visible")
})

