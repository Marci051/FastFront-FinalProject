const button = document.getElementById("toggle-theme");
const icon = document.getElementById("theme-icon");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("black");
  document.body.classList.toggle("white");

  if (icon.src.includes("sun.png")) {
    icon.src = "images/moon.png";
  } else {
    icon.src = "images/sun.png";
  }
});

/* **********scrollButton****** */
//window = object   onscroll = propetry(ye meqdar daran)
//console.log(window.onscroll)
window.onscroll = function () {
  const button = document.getElementById("scrollToTop");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    button.classList.add("show");
    //classlist = property
  } else {
    button.classList.remove("show");
  }
};

document.getElementById("scrollToTop").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  //scrollTo(x,y)  --> property
  //scrollTo({object})  --> object
};
