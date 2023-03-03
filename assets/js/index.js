const accordionButtons = document.querySelectorAll(".accordion");

accordionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    
    const plusIcon = this.querySelector("#plus");
    const minusIcon = this.querySelector("#minus");
    if (plusIcon.style.display === "none") {
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }

    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

function hambugerHandler() {
  var bars = document.getElementById("nav-btn");
  bars.classList.toggle("btn-hide");
  var bars = document.getElementById("nav-items");
  bars.classList.toggle("nav-hide");
  
  var overlay = document.getElementById("overlay");
  overlay.classList.toggle("hide");
}
