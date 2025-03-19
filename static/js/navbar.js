
function toggleDarkMode() {
    const darkModeCheckbox = document.getElementById("darkModeCheckbox");
    if (darkModeCheckbox.checked) {
      console.log("hii");
      document.body.style.backgroundColor = "#020b11";
      document.getElementsByClassName("curve-path")[0].style.fill = "#020b11";
      document.getElementsByClassName("grid-container")[0].style.backgroundColor =
        "#000000";
      document.getElementsByClassName("offcanvas-end")[0].style.backgroundColor =
        "#020b11";
  
      document.querySelectorAll(".activities-text-inverted").forEach((element) => { // activities-text
        element.classList.add("text-white");
      });
  
      document.querySelectorAll(".text-color-inverted").forEach((element) => { // activities-text
        element.classList.add("text-white");
      });
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.getElementsByClassName("curve-path")[0].style.fill = "#ffffff";
      document.getElementsByClassName("grid-container")[0].style.backgroundColor =
        "#b1adad";
      document.getElementsByClassName("offcanvas-end")[0].style.backgroundColor =
        "#b1adad";
  
      document.querySelectorAll(".activities-text-inverted").forEach((element) => { // activities-text
        element.classList.remove("text-white");
      });
  
      document.querySelectorAll(".text-color-inverted").forEach((element) => { // activities-text
        element.classList.remove("text-white");
      });
    }
  }