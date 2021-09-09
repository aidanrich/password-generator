
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  // var superSecretPass;
  // var pizza = confirm("Do you like pizza?");
  // // This is where the challenge for this should happen. confirm gets you prompts
  var passLength = prompt("How many characters? Must be between 8 and 128");
  var lowerCase = confirm("Use lower case letters?");
  var upperCase = confirm("Use upper case letters?");
  var useNumber = confirm("Use numbers?");
  var useSymbol = confirm("Use symbols?");

    



  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
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
  

  // return pizza;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
