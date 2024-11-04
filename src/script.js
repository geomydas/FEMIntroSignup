const form = document.querySelector("[data-js='form']");
const inputFirstName = document.querySelector("[data-js='first-name']");
const inputLastName = document.querySelector("[data-js='last-name]");
const inputEmail = document.querySelector("[data-js='email']");
const inputPassword = document.querySelector("[data-js='password']");
const inputs = [inputFirstName, inputLastName, inputPassword];

function inputInvalid(input) {
  input.classList.add("border-red");
  input.classList.remove("border-gray");
  input.classList.add("text-red");
  input.classList.remove("text-brown");
  input.setAttribute("aria-invalid", "true");
  input.nextElementSibling.classList.remove("hidden");
  input.nextElementSibling.classList.add("block");
  input.nextElementSibling.textContent = `${input.placeholder} cannot be empty`;
}

function inputValid(input) {
  input.classList.remove("border-red");
  input.classList.add("border-gray");
  input.classList.remove("text-red");
  input.classList.add("text-brown");
  input.setAttribute("aria-invalid", "false");
  input.nextElementSibling.classList.add("hidden");
  input.nextElementSibling.classList.remove("block");
  input.nextElementSibling.textContent = "";
}

function validateInput() {
  inputs.forEach((input) => {
    if (!input.validity.valid) {
      inputInvalid(input);
    }

    if (input.validity.valid) {
      inputValid(input);
    }
  });
}

function validateEmail(email) {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailValid = regexEmail.test(email.value);

  if (!emailValid) {
    inputInvalid(email);
  }

  if (emailValid) {
    inputValid(email);
  }
}

function resetForm() {
  if (
    inputFirstName.validity.valid &&
    inputLastName.validity.valid &&
    inputEmail.validity.valid &&
    inputPassword.validity.valid
  ) {
    form.reset();
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateInput();
  validateEmail(inputEmail);
  resetForm();
});
