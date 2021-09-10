
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var randomNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var randomSymbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"] 

function generatePassword() {
  // var superSecretPass;
  // var pizza = confirm("Do you like pizza?");
  // // This is where the challenge for this should happen. confirm gets you prompts
  var myPassword = "";
  var lengthOfPass = prompt("How many characters? Must be between 8 and 128");
  if (8 > lengthOfPass || lengthOfPass > 128) {
    alert("Password must be between 8 and 128 characters.");
    return;
  }
  console.log(lengthOfPass)



  // var lowerCase = confirm("Use lower case letters?");
  // if (lowerCase) {
  //   getRandomLower();
  // }
  // var upperCase = confirm("Use upper case letters?");
  // if (upperCase) {
  //   getRandomUpper();
  // }
  // var useNumber = confirm("Use numbers?");
  // if (useNumber) {
  //   getRandomNumber();
  // }
  // var useSymbol = confirm("Use symbols?");
  // if (useSymbol) {
  //   getRandomSymbol();
  // }
  
  for ( var i = 0; i < lengthOfPass; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
lengthOfPass));
 }

  return myPassword;

}


  






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
