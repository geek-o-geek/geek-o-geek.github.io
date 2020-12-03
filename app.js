var initialColor = document.getElementById("header").style.color;
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.color = "#fff";
    document.getElementById("menu").style.opacity = "0.7";
  } else {
    document.getElementById("header").style.color = initialColor;
    document.getElementById("menu").style.opacity = "1";
  }
}