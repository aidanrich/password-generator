
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var superSecretPass;
  var pizza = confirm("Do you like pizza?");
  // This is where the challenge for this should happen

  return pizza;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
