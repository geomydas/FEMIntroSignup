const form = document.querySelector("#form");
const inputFirstName = document.querySelector("#first-name");
const inputLastName = document.querySelector("#last-name");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputs = [inputFirstName, inputLastName, inputPassword];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  inputs.forEach((input) => {
    if (!input.validity.valid) {
      input.classList.add("border-red");
      input.classList.remove("border-gray");
      input.classList.add("text-red");
      input.classList.remove("text-brown");
      input.nextElementSibling.classList.remove("hidden");
      input.nextElementSibling.classList.add("block");
      input.nextElementSibling.textContent = `${input.placeholder} cannot be empty`;
    }
  });

  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailValid = regexEmail.test(inputEmail.value);

  if (!emailValid) {
    input.classList.add("border-red");
    input.classList.remove("border-gray");
    input.classList.add("text-red");
    input.classList.remove("text-brown");
    inputEmail.nextElementSibling.classList.remove("hidden");
    inputEmail.nextElementSibling.classList.add("block");
    inputEmail.nextElementSibling.textContent = `Looks like this is not an email`;
  }

  if (
    inputFirstName.validity.valid &&
    inputLastName.validity.valid &&
    inputPassword.validity.valid &&
    emailValid
  ) {
    form.reset();
  }
});
