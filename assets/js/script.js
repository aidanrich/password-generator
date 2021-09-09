
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // var superSecretPass;
  // var pizza = confirm("Do you like pizza?");
  // // This is where the challenge for this should happen. confirm gets you prompts
  var myPassword = (lengthOfPass + lowerCase + upperCase + useNumber + useSymbol)
  var lengthOfPass = prompt("How many characters? Must be between 8 and 128");
  if (8 > lengthOfPass || lengthOfPass > 128) {
    alert("Password must be between 8 and 128 characters.");
    return;
  } else {
    lengthOfPass.length
  }

  var lowerCase = confirm("Use lower case letters?");
  if (lowerCase) {
    getRandomLower();
  }
  var upperCase = confirm("Use upper case letters?");
  if (upperCase) {
    getRandomUpper();
  }
  var useNumber = confirm("Use numbers?");
  if (useNumber) {
    getRandomNumber();
  }
  var useSymbol = confirm("Use symbols?");
  if (useSymbol) {
    getRandomSymbol();
  }


  return myPassword;




  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  console.log(getRandomLower())

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
}

// return pizza;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
