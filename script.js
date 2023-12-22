//Very janky, but it works; I wanted to make a checkbox system, but I'll try again later
function generatePassword() {
  let checkUpper = confirm("Do you require uppercase letters?");
  let checkLower = confirm("Do you require lowercase letters?");
  let checkNumber = confirm("Do you require numbers?");
  let checkSpecial = confirm("Do you require special characters?");

  //In case no parameters selected
  if (!checkUpper && !checkLower && !checkNumber && !checkSpecial) {
    alert("No parameters have been selected, exiting program.");
    return("Try Again");
  }

  //Converts desired length into a number to be used for math conversions and equations
  let pwdLength = prompt("How long must the password be? (Must be between at least 8 and no more than 128 characters).");
  let newLength = parseInt(pwdLength);

  //Checks the validity of the input the user entered, making sure it's valid
  if (newLength == NaN) {
    alert("The input provided is not a number, exiting program.");
    return("Try Again");
  }
  else if (newLength < 8 || newLength > 128) {
    alert("The number provided is not a valid number, exiting program.");
    return("Try Again");
  }

  //Makes the password by picking random fragments from an array, which is formed from a string based on the
  //user's input at the beginning, such as their number of characters and parameters

  //Forms origin strings
  let upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26
  let lowerString = upperString.toLowerCase();    //26
  let numbString = "0123456789";   //10
  let specString = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";    //30

  //Selects the strings based on the user input by nullifying deselected parameters
  if (!checkLower) {
    lowerString = "";
  }

  if (!checkNumber) {
    numbString = "";
  }

  if (!checkSpecial) {
    specString = "";
  }

  if (!checkUpper) {
    upperString = "";
  }

  //Merges strings and transforms strings into array to be used for math,
  //as well as define variable required for said maths
  let mergedString = lowerString + numbString + specString + upperString;

  let mergedStringArray = mergedString.split("");
  let mergedStringLength = mergedStringArray.length;

  //repeatedly adds randomly chosen characters from merged array and 
  //adds them to the returned value
  let finalPassword = ""
  for (var count = 0; count < newLength; count++) {
    chosenChar = Math.floor(Math.random() * mergedStringLength);
    randomChar = mergedStringArray[chosenChar];
    finalPassword = finalPassword + randomChar;
  }

  return(finalPassword);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
