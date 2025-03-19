let index = 0;

window.addEventListener("resize", function (event) {
  const isScreenSmall = window.matchMedia("(max-width:600px)").matches;
  if (isScreenSmall) {
    hideAllGrids();
    showSlide(1);
  } else {
    displayAllGrids();
  }
});
function displayAllGrids() {
  const gridItems = document.getElementsByClassName("grid-item");
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.display = "block";
  }
}

function hideAllGrids() {
  const gridItems = document.getElementsByClassName("grid-item");
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.display = "none";
  }
}

function showNextSlide(nextSlideShow) {
  showSlide(index + nextSlideShow + 1);
}

function showSlide(slideNumber) {
  const gridItems = document.getElementsByClassName("grid-item");
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.display = "none";
  }
  index =
    slideNumber - 1 >= 0
      ? (slideNumber - 1) % gridItems.length
      : gridItems.length - slideNumber - 1;
  const gridItem = gridItems[index];

  gridItem.style.display = "block";

}