
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var randomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randomNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var randomSymbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"]



function generatePassword() {

  // // This is where the work for this assignment should happen. confirm gets you prompts
  var myPassword = "";
  var lengthOfPass = prompt("How many characters? Must be between 8 and 128");
  if (8 > lengthOfPass || lengthOfPass > 128) {
    alert("Password must be between 8 and 128 characters.");
    return;
  }
  console.log(lengthOfPass)

    // need empty array
  var passComponents = []

  // concat arrays!
  var lowerCaseConfirm = confirm("Use lower case letters?");
  if (lowerCaseConfirm) {
    passComponents = passComponents.concat(randomLower)
  }

  var upperCaseConfirm = confirm("Use upper case letters?");
  if (upperCaseConfirm) {
    passComponents = passComponents.concat(randomLower)
  }


  var useNumberConfirm = confirm("Use numbers?");
  if (useNumberConfirm) {
    passComponents = passComponents.concat(randomNumber)
  }

  var useSymbolConfirm = confirm("Use symbols?");
  if (useSymbolConfirm) {
    passComponents = passComponents.concat(randomSymbols)
  }
  console.log(passComponents)

  // needs work
  if ((lowerCaseConfirm === false) && (upperCaseConfirm === false) && (useNumberConfirm === false) && (useSymbolConfirm === false)) {
    alert("You need something to make your password!");
  }


  // For statement actually gets the password from the arrays!

  for (var i = 0; i < lengthOfPass; i++) {
    myPassword += passComponents[Math.floor(Math.random() * passComponents.length)];
  }
  console.log(myPassword)


  return myPassword;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
