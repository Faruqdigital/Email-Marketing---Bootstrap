const hambugerMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-nav");
const navMenu = document.querySelector("nav");

hambugerMenu.addEventListener("click", () => {
  navMenu.classList.add("open-nav");
  navMenu.classList.remove("back-nav");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("open-nav");
  navMenu.classList.add("back-nav");
});

function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "white";
    tablinks[i].style.color = "black";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();