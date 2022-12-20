// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 100 ||
//     document.documentElement.scrollTop > 100
//   ) {
//     document.querySelector(".hidden-nav-bar").style.top = "0";
//   } else {
//     document.querySelector(".hidden-nav-bar").style.top = "-100px";
//   }
// }

// slide-nav-bar
const slideLeft = document.querySelector(".slide-left");
const slideNavBar = document.querySelector(".slide-nav-bar");
const slideRight = document.querySelector(".slide-right");

slideLeft.addEventListener("click", function () {
  slideNavBar.style.right = "0";
  slideLeft.style.display = "none";
  slideNavBar.style.visibility = "visible"
});

slideRight.addEventListener("click", function () {
  slideNavBar.style.right = "-200px";
  slideLeft.style.display = "block";
  slideNavBar.style.visibility = "hidden"
});
