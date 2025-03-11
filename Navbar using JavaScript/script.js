const openIcon = document.querySelector(".open-icon")
const closeIcon = document.querySelector(".close-icon")
const navContainer = document.querySelector(".nav-bar")


openIcon.addEventListener("click", () => {
    navContainer.classList.add("show-nav")
    openIcon.classList.add("hide-item")
    closeIcon.classList.remove("hide-item")
})

closeIcon.addEventListener("click", () => {
    navContainer.classList.remove("show-nav")
    closeIcon.classList.add("hide-item")
    openIcon.classList.remove("hide-item")
})