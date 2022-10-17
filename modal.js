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
const checkboxes = document.querySelectorAll(".checkbox-input[type=radio]");
const conditions = document.getElementById("checkbox1");
const submitButton = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".confirmation-modal");
const modalConfirmationClose = document.querySelector(
  ".confirmation-modal-close"
);
const modalConfirmationCloseButton = document.querySelector(
  ".confirmation-modal-close-btn"
);

// Signup modal

modalBtn.forEach((btn) => (btn.onclick = launchModal));

function launchModal() {
  modalbg.style.display = "block";
}

modalCloseButton.onclick = closeModal;

function closeModal() {
  modalbg.style.display = "none";
}

// Confirmation modal

modalConfirmationClose.onclick = closeModalConfirmation;

function launchModalConfirmation() {
  modalConfirmation.style.display = "block";
}

modalConfirmationCloseButton.onclick = closeModalConfirmation;

function closeModalConfirmation() {
  modalConfirmation.style.display = "none";
}

// Form fields checker

function showErrorMessage(formData, message) {
  formData.dataset.error = message;
  formData.dataset.errorVisible = "true";
}

function hideErrorMessage(formData) {
  delete formData.dataset.error;
  delete formData.dataset.errorVisible;
}

function isNameValid(str) {
  let regex =
    /^[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\/\<\>\=\@\[\]\\\^\_\{\}\|\~]{2,}$/;
  return regex.test(str);
}

function isEmailValid(str) {
  let regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return regex.test(str);
}

function isBirthdateValid(str) {
  let regex =
    /^((19[0-9]{2})|(20[0-9]{2}))-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))$/;
  return regex.test(str);
}

function isANumber(str) {
  let regex = /^[0-9]+$/;
  return regex.test(str);
}

function isARadioButtonChecked() {
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      return true;
    }
  }
  return false;
}

function validateFirstname() {
  if (!isNameValid(firstname.value)) {
    showErrorMessage(formData[0], "Veuillez entrer 2 caractères ou plus.");
  } else {
    hideErrorMessage(formData[0]);
  }
}

function validateLastname() {
  if (!isNameValid(lastname.value)) {
    showErrorMessage(formData[1], "Veuillez entrer 2 caractères ou plus.");
  } else {
    hideErrorMessage(formData[1]);
  }
}

function validateEmail() {
  if (!isEmailValid(email.value)) {
    showErrorMessage(formData[2], "Veuillez saisir un email valide.");
  } else {
    hideErrorMessage(formData[2]);
  }
}

function validateBirthdate() {
  if (!isBirthdateValid(birthdate.value)) {
    showErrorMessage(formData[3], "Vous devez entrer votre date de naissance.");
  } else {
    hideErrorMessage(formData[3]);
  }
}

function validateQuantity() {
  if (!isANumber(quantity.value)) {
    showErrorMessage(formData[4], "Veuillez saisir une valeur numérique.");
  } else if (quantity.value < 0 || quantity.value > 99) {
    showErrorMessage(
      formData[4],
      "La valeur doit être comprise entre 0 et 99."
    );
  } else {
    hideErrorMessage(formData[4]);
  }
}

function validateRadioButtons() {
  if (!isARadioButtonChecked()) {
    showErrorMessage(formData[5], "Vous devez choisir une option.");
  } else {
    hideErrorMessage(formData[5]);
  }
}

function validateConditions() {
  if (!conditions.checked) {
    showErrorMessage(
      formData[6],
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
  } else {
    hideErrorMessage(formData[6]);
  }
}

function validate(event) {
  event.preventDefault();
  let isFormValid = null;
  validateFirstname();
  validateLastname();
  validateEmail();
  validateBirthdate();
  validateQuantity();
  validateRadioButtons();
  validateConditions();
  if (
    isNameValid(firstname.value) &&
    isNameValid(lastname.value) &&
    isEmailValid(email.value) &&
    isBirthdateValid(birthdate.value) &&
    isANumber(quantity.value) &&
    isARadioButtonChecked() &&
    conditions.checked
  ) {
    closeModal();
    launchModalConfirmation();
  }
}
