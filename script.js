const passwordBox = document.getElementById("password");
const length = 12; //length of password

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol; //all characters combined

function createPassword() {
  let password = "";
  //makes sure that at least one character from each group in generated into the password
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  //Fill the remaining characters randomly from all groups
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  //Displays the random password to the input
  passwordBox.value = password;
}

function copyPassword() {
  const password = passwordBox.value;

  navigator.clipboard
    .writeText(password)
    .then(function () {
      console.log("Password copied to clipboard successfully!");
      alert("Password copied!");
    })
    .catch(function (err) {
      console.error("Failed to copy password: ", err);
      alert("Failed to copy password. Please try again.");
    });
}
