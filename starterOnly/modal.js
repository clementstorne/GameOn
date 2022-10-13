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

firstname.addEventListener("change", () => {
  if (!isNameValid(firstname.value)) {
    showErrorMessage(formData[0], "Veuillez entrer 2 caractères ou plus.");
  } else {
    hideErrorMessage(formData[0]);
  }
});

lastname.addEventListener("change", () => {
  if (!isNameValid(lastname.value)) {
    showErrorMessage(formData[1], "Veuillez entrer 2 caractères ou plus.");
  } else {
    hideErrorMessage(formData[1]);
  }
});

function isEmailValid(str) {
  let regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return regex.test(str);
}

email.addEventListener("change", () => {
  if (!isEmailValid(email.value)) {
    showErrorMessage(formData[2], "Veuillez saisir un email valide.");
  } else {
    hideErrorMessage(formData[2]);
  }
});

function isBirthdateValid(str) {
  let regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
  return regex.test(str);
}

birthdate.addEventListener("change", () => {
  if (!isBirthdateValid(birthdate.value)) {
    showErrorMessage(formData[3], "Vous devez entrer votre date de naissance.");
  } else {
    hideErrorMessage(formData[3]);
  }
});

function isANumber(str) {
  let regex = /^[0-9]+$/;
  return regex.test(str);
}

quantity.addEventListener("change", () => {
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
});

function isARadioButtonChecked() {
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      return true;
    }
  }
  return false;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    if (!isARadioButtonChecked) {
      showErrorMessage(formData[5], "Vous devez choisir une option.");
    } else {
      hideErrorMessage(formData[5]);
    }
  });
});

cgu.addEventListener("change", () => {
  if (!cgu.checked) {
    showErrorMessage(
      formData[6],
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
  } else {
    hideErrorMessage(formData[6]);
  }
});
