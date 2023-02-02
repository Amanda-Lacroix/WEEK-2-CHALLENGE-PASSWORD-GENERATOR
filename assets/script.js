
// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// we need character options that the computer can choose from
// var charOptions ["ABCDEFGHIJKLMNOPQRSTUVWXYZ,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9, !#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"]

// we need a function to generate the password bsed on criteria
function generatePassword (){
console.log(its working);

// we need a prompt of the number of characters the user would like the password to be ( 8 to 128)


// we need a prompt outlining the characters that will be used (upper/lower/special/number)
// var charUsed = window.prompt("Passwords are to contain the following: Upper & Lower case, numbers and special characters");
// if (!charUsed) {
//   return;
// }
// the input needs to be validated
// the password needs to be displayed on the page

return "password"

}





// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

