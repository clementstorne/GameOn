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
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const cgu = document.getElementById("checkbox1");

// console.log(formData[3]);

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

email.addEventListener("change", () => {
  if (!isEmailValid(email.value)) {
    formData[2].dataset.error = "Veuillez saisir un email valide.";
    formData[2].dataset.errorVisible = "true";
  } else {
    delete formData[2].dataset.error;
    delete formData[2].dataset.errorVisible;
  }
});

function isBirthdateValid(str) {
  let regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
  return regex.test(str);
}

birthdate.addEventListener("change", () => {
  if (!isBirthdateValid(birthdate.value)) {
    formData[3].dataset.error = "Vous devez entrer votre date de naissance.";
    formData[3].dataset.errorVisible = "true";
  } else {
    delete formData[3].dataset.error;
    delete formData[3].dataset.errorVisible;
  }
});

function isANumber(str) {
  let regex = /^[0-9]+$/;
  return regex.test(str);
}

quantity.addEventListener("change", () => {
  if (!isANumber(quantity.value)) {
    formData[4].dataset.error = "Veuillez saisir une valeur numérique.";
    formData[4].dataset.errorVisible = "true";
  } else if (quantity.value < 0 || quantity.value > 99) {
    formData[4].dataset.error = "La valeur doit être comprise entre 0 et 99.";
    formData[4].dataset.errorVisible = "true";
  } else {
    delete formData[4].dataset.error;
    delete formData[4].dataset.errorVisible;
  }
});

cgu.addEventListener("change", () => {
  if (!cgu.checked) {
    formData[6].dataset.error =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    formData[6].dataset.errorVisible = "true";
  } else {
    delete formData[6].dataset.error;
    delete formData[6].dataset.errorVisible;
  }
});
