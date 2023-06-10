const openMenuIcon = document.querySelector(".menu-icon");
const closeMenuIcon = document.querySelector(".close-menu-icon");
const navigation = document.querySelector(".navigation");

const openMenu = () => {
  navigation.classList.add("overlay", "sidemenu");
  document.body.style.overflow = 'hidden';
}
const closeMenu = () => {
  console.log("yay")
  navigation.classList.remove("overlay", "sidemenu");
  document.body.style.overflow = 'auto';
}
openMenuIcon.addEventListener("click", openMenu)
closeMenuIcon.addEventListener("click", closeMenu)

document.addEventListener("click", (e) => {
  e.target.classList.contains("overlay") && closeMenu();
})