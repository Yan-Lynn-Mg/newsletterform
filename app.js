const button = document.querySelector("#button");
let email = document.querySelector("#email");
const error = document.querySelector(".error");
const firstPage = document.querySelector(".main-container");
const successForm = document.querySelector(".container");
const disButton = document.querySelector(".dismiss");
const userEmail = document.querySelector(".user-email");

button.addEventListener("click", () => {
  let inputEmail = email.value;
  // console.log(inputEmail);
  const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let checkValid = inputEmail.match(format);
  if (checkValid) {
    userEmail.innerText = inputEmail;
    firstPage.style.display = "none";
    successForm.style.display = "block";
  } else {
    error.style.display = "block";
    error.style.color = "red";
    // email.style.borderColor = "red";
    email.style.border = "none";
    email.classList.add("error-state");
  }
});

disButton.addEventListener("click", () => {
  successForm.style.display = "none";
  firstPage.style.display = "block";
  firstPage.style.display = "flex";
  email.value = "";
});
