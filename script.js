// Assignment Code

var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  return math.floor(math.random() * (max - min + 1)) + min;
}

// Prompt the user password criteria pw length 8<128, pw lowercase uppercase numbers special characters
function generatePassword() {

  var userInput = window.prompt("How long do you want your password to be?");

  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("Must include a number!");
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("The length cannot be less than 8 characters or more than 128 characters!");
    generatePassword();
    return;
  }
  var userChoiceNumbers = window.confirm("Would you like numbers in your password?");
  var userChoiceUppercase = window.confirm("Would you like uppercase in your password?");
  var userChoiceLowercase = window.confirm("Would you like lowercase in your password?");
  var userChoiceSymbols = window.confirm("Would you like symbols in your password?");

  var numbersLog = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var uppercaseLog = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseLog = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var symbolsLog = ["!", "#", "%", "^", "&", "*", "-", "+", "=", "$", "/", "(", ")"];
// Used "concat" to pull all different arrays 
  var options = []
  var passwordResult = []
  if (userChoiceNumbers === true) {
    options = options.concat(numbersLog)
  }

  if (userChoiceUppercase === true) {
    options = options.concat(uppercaseLog)
  }

  if (userChoiceLowercase === true) {
    options = options.concat(lowercaseLog)
  }

  if (userChoiceSymbols === true) {
    options = options.concat(symbolsLog)
  }

// Validate the input

  for (var i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * options.length);
    passwordResult.push(options[randomIndex]);
  }
// Used "join" to remove the commas when we create password
  return passwordResult.join('');
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
