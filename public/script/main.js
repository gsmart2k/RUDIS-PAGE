/** @format */

const ham = document.querySelector(".ham");
const navlinks = document.querySelector(".nav-links");

ham.addEventListener("click", openNav);

function openNav() {
  if (navlinks.classList.contains("hide")) {
    navlinks.classList.remove("hide");
    navlinks.classList.add("show");
  } else {
    navlinks.classList.remove("show");
    navlinks.classList.add("hide");
  }
}
// function closeNav(){
//     nav.classList.remove("show")
//     parentham1.classList.add("show")
//     parentham2.classList.add("hide")
// }
