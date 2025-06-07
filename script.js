// Character sets
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const specialCheckbox = document.getElementById("special");
const generateBtn = document.getElementById("generate");
const resultArea = document.getElementById("result");

generateBtn.addEventListener("click", () => {
  let length = parseInt(lengthInput.value);
  if (isNaN(length) || length < 4 || length > 32) {
    alert("Password length must be between 4 and 32.");
    return;
  }

  // Build the allowed character set
  let charSet = "";
  if (uppercaseCheckbox.checked) charSet += uppercaseChars;
  if (lowercaseCheckbox.checked) charSet += lowercaseChars;
  if (numbersCheckbox.checked) charSet += numberChars;
  if (specialCheckbox.checked) charSet += specialChars;

  if (!charSet) {
    alert("Please select at least one character type.");
    return;
  }

  let password = generatePassword(length, charSet);
  resultArea.value = password;
});

function generatePassword(length, charSet) {
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  return password;
}
