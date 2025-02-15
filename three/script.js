const background = document.getElementById("con");
const switchToggle = document.getElementById("tog");

switchToggle.onclick = function btn() {
  if (switchToggle.checked == true) {
    background.style.backgroundColor = "gray";
  } else {
    background.style.backgroundColor = "white";
  }
};
