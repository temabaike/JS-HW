const form = document.querySelector("#form");
const submitBtn = document.querySelector(".submit");

console.log(form);

const validatePassword = function(e) {
  const passwordValue = form.target[1].value;
  const confirmPasswordValue = form.target[2].value;

  console.log(passwordValue, confirmPasswordValue);
};

form.addEventListener("submit", function(e) {
e.preventDefault();

validatePassword(e);
});