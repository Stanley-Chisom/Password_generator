function generatePassword() {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < 8; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

let generateButton = document.getElementById("generate-button");
let passwordInput = document.getElementById("password-input");

generateButton.addEventListener("click", function() {
  passwordInput.value = generatePassword();
});


