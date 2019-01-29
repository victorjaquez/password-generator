// Requirements
// 8 - 32 characters
// 1 Uppercase
// 1 Lowercase
// 1 Special Character
// 1 Number

const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercase = lowercase.map(letter => letter.toUpperCase());
const specialCharacters = "!@#$%^&*()_+{}:\"<>?|[];',./`~".split("");
const numbers = "0123456789".split("");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomPassword() {
  // Generate random length between 8 & 32.
  let passwordLength = randomInt(8, 32);

  // Put all the characters in the array
  let allChars = [...lowercase, ...uppercase, ...specialCharacters, ...numbers];
  let password = [];

  // Add one of each after the loop
  for (let i = 0, n = allChars.length; i < passwordLength - 4; i++) {
    password.push(allChars[Math.floor(Math.random() * n)]);
  }

  // Add 1 of each to a random location
  for (const arr of [lowercase, uppercase, numbers, specialCharacters])
    password.splice(randomInt(0, password.length - 1), 0, getRandomItem(arr));

  return password.join("");
}
let pass = randomPassword();
console.log(pass, "Password Length:", pass.length);
