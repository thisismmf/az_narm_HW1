const header = document.getElementById("header");

function getRandomColor() {
  var letters = "0123456789abcdef";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomGradient() {
  return `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()}a1)`;
}

function changeColor() {
  header.style.background = `${getRandomGradient()}, url("statics/images/dog.jpg")`;

  header.style["background-size"] = "100% 100%";
  header.style["background-position-x"] = "right";
  header.style["background-repeat"] = "no-repeat";
}