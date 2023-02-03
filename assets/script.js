
// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// we need a function to generate the password bsed on criteria
function generatePassword() {

// we need character options that the computer can choose from
var charOptions = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"]
var randomPass = []
// we need a prompt of the number of characters the user would like the password to be ( 8 to 128)
var charLength = window.prompt("Please enter how many characters you wish your password to be (must be between 8 to 128)");
if (charLength < 8 || charLength > 128 ) {
  window.alert ("Password must be 8 to 128 Characters.")
  generatePassword()
}

// we need a prompt outlining the characters that will be used (upper/lower/special/number)
var charUsedUpper = window.confirm("Password will contain an UPPERCASE letter. Please click OK.");
var charUsedLower = window.confirm("Password will contain a lowercase letter. Please click OK.");
var charUsedSpecial = window.confirm("Password will contain a Special Character. Please click OK.");
var charUsedNumber = window.confirm("Password will contain a Number. Please click OK.");

  if (!charUsedUpper) {
  return generatePassword ();
  }

// the password needs to be displayed on the page
for (var i=0; i <=charLength.valueOf; i++){
var randomPass= Math.floor(Math.random() * charOptions.length);
}

return randomPass

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

