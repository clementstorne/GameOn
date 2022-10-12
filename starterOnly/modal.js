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
const modalCloseButton = document.querySelector(".close");
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");

// console.log(formData[0]);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal
modalCloseButton.onclick = closeModal;
function closeModal() {
  modalbg.style.display = "none";
}

// Form fields checker

function isNameValid(str) {
  let regex =
    /^[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\/\<\>\=\@\[\]\\\^\_\{\}\|\~]{2,}$/;
  return regex.test(str);
}

firstname.addEventListener("change", () => {
  if (!isNameValid(firstname.value)) {
    formData[0].dataset.error = "Veuillez entrer 2 caractères ou plus.";
    formData[0].dataset.errorVisible = "true";
  } else {
    delete formData[0].dataset.error;
    delete formData[0].dataset.errorVisible;
  }
});

lastname.addEventListener("change", () => {
  if (!isNameValid(lastname.value)) {
    formData[1].dataset.error = "Veuillez entrer 2 caractères ou plus.";
    formData[1].dataset.errorVisible = "true";
  } else {
    delete formData[1].dataset.error;
    delete formData[1].dataset.errorVisible;
  }
});

function isEmailValid(str) {
  let regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return regex.test(str);
}
