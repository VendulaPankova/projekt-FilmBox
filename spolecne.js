 /*const ElHamburger = document.querySelector("#menu-tlacitko")
 const ElPolozky = document.querySelector("#menu-polozky")

function toggleMenu() {
   ElPolozky.classList.toggle("show") // Přidání a odebrání řídy show
   
}
ElHamburger.addEventListener("click", toggleMenu) */


const ElHamburger = document.querySelector("#menu-tlacitko")
const ElHamburgerIkona = document.querySelector("#menu-tlacitko i")
const ElPolozky = document.querySelector("#menu-polozky")

ElHamburger.addEventListener("click", () => {
    // Přepnutí třídy show na menu
    ElPolozky.classList.toggle("show")

    // Přepnutí ikonky mezi hamburgerem a křížkem
    if (ElPolozky.classList.contains("show")) {
        ElHamburgerIkona.classList.remove("fa-bars")
        ElHamburgerIkona.classList.add("fa-xmark")
    } else {
        ElHamburgerIkona.classList.remove("fa-xmark")
        ElHamburgerIkona.classList.add("fa-bars")
    }
})
console.log("kontrola zdali se podařilo!") 