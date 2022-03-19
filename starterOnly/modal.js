function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//x button close
const BtnClose = document.querySelectorAll(".close,.btn-close");
BtnClose.forEach(elt => elt.addEventListener("click", CloseModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//function

//close modal

function CloseModal() {
  modalbg.style.display = "none";
}
