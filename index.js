let form = document.getElementById("f");
form.addEventListener("submit", function (event) {
    let number = document.getElementById("number").value;
  let message = document.getElementById("message").value;
  let email = document.getElementById("email").value;
  let nameError = document.getElementById("nameError");
  let messageError = document.getElementById("messageError");
  let emailError = document.getElementById("emailError");
  let numberError = document.getElementById("numberError");
  let name = document.getElementById("name").value;
  console.log(name.trim().length);

  event.preventDefault();
  if (name.length > 50) {
    nameError.textContent = "error name should be betwen 0 and 50 ";
  }
  if (message.length > 20) {
    messageError.textContent = "error message should be betwen 0 and 20 ";
  }
  let numberValidate= /^\d{10}$/;
  if (!numberValidate.test(number)) {
    numberError.textContent = "error number should be number ";
  }
  let emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailValidate.test(email) ) {
    emailError.textContent = "error email should be betwen 0 and 50 ";
  }
  
});
