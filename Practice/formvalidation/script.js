const form = document.querySelector("#form")
const usernameInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")
const passwordConfirmInput = document.querySelector("#password-confirmation")
const termsInput = document.querySelector("#terms")
const errorsContainer = document.querySelector(".errors")
const errorsList = document.querySelector(".errors-list")

form.addEventListener("submit", e => {
  const errorMessage = [];
  clearErrors();
  if (usernameInput.value.length < 6)
    errorMessage.push('Ensure the username is atleast 6 characters long');

  if (passwordInput.value.length < 10)
    errorMessage.push('Ensure the password is atleast 10 characters long');

  if (passwordInput.value.length !== passwordConfirmationInput.value.length)
    errorMessage.push('Ensure the password and confirmed password match');

  if (!termsInput.checked) errorMessage.push('Ensure the terms ia checked');

   if (errorMessages.length > 0) {
    showErrors(errorMessages)
    e.preventDefault()
  }
});

function clearErrors() {
  while (errorsList.children[0] != null) {
    errorsList.removeChild(errorsList.children[0])
  }
  errorsContainer.classList.remove("show")

  function showErrors(errorMessages) {
  errorMessages.forEach(errorMessage => {
    const li = document.createElement("li")
    li.innerText = errorMessage
    errorsList.appendChild(li)
  })
  errorsContainer.classList.add("show")
}
}
