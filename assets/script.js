// Assignment code here

// Overarching function  designed to generate password based on prompted criteria
generatePassword = function(){
  
  // Function to set and store  the length of the password in a variable
  var setLength = function(){
    var lengthChoice = window.prompt("How many characters would you like your password to be? (Must be 8-128 characters");
    if(lengthChoice >= 8 && lengthChoice <= 128) {
        lengthChoice = lengthChoice;
        return lengthChoice;
    } else if(!lengthChoice){
        window.alert("A value must be specified to continue");
        return setLength();
    } else {
        window.alert("Please enter a valid number");
        return setLength();
    }
  } 
  // Calling the setLength function to get a character length
  var characterCount = setLength();
  console.log(characterCount);

  // Function to determine character types
    confirmations = function(){
    // Set boolean values based on character choices
    var uppercaseChoice = window.confirm("Click OK to confirm the use of uppercase characters in your password (Cancel if you would like to not include uppercase characters)");
    var lowercaseChoice = window.confirm("Click OK to confirm the use of lower characters in your password (Cancel if you would like to not include lowercase characters)");
    var numericChoice = window.confirm("Click OK to confirm the use of numeric characters in your password (Cancel if you would like to not include numeric characters)");
    var specialChoice = window.confirm("Click OK to confirm the use of special characters in your password (Cancel if you would like to not include special characters)");
    var confirmationsArray = [uppercaseChoice,lowercaseChoice,numericChoice,specialChoice];
    
    //Returns to the beginning of confirmation function and gives alert if no characters are chosen
    if(uppercaseChoice === false && lowercaseChoice === false && numericChoice === false && specialChoice === false){
      window.alert("Must confirm at least one character type. Please try again.");
      return confirmations();
    } else {
      return confirmationsArray;
    }
  }

  // calling confirmations function to get an array of boolean values
  var inputs = confirmations()
  console.log(inputs);

  //Create string of potential password characters based on criteria
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "1234567890";
  var specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  // creates empty string of potential characters based on user inputs/confirmations
  var potentialCharacters = "";
  // creates empty string to populate with final password
  var finalPassword = "";

  // Adds potential character based on inputs
  if (inputs[0] == true){
    potentialCharacters += upperLetters
  };
  if(inputs[1] == true){
    potentialCharacters += lowerLetters
  };
  if(inputs[2] == true){
    potentialCharacters += numericCharacters
  };
  if(inputs[3] == true) {
    potentialCharacters += specialCharacters
  };
  console.log(potentialCharacters);

  // Loops through string of potential characters the amount of times equivalent to the password length input. Each time, the loop pulls one character at random index within the potential character string
  for ( var i = 0; i < characterCount; i++ ) {
  finalPassword += potentialCharacters.charAt(Math.floor(Math.random() * potentialCharacters.length));
  }
  return finalPassword;
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