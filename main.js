const profile = ['Oluwatobi', 'Sofela', 'codesweetly.com'];

const firstName = profile[0];
const lastName = profile[1];
const website = profile[2];

console.log(firstName);
console.log(lastName);
console.log(website);

// destructuring swap variable

let firstitle = 'Oluwatobi';
let com = 'CodeSweetly';

[firstitle, com] = [com, firstitle];

console.log(firstitle);
console.log(com);

// Destructuring Array as Parameter 
const man = ['Oluwatobi', 'Sofela'];

function getUserBio([firstName, lastName]) {
  return `My name is ${firstName} ${lastName}.`;
}

console.log(getUserBio(man));

// Destructuring Objects

      // app.js
// A bunch of our own code, 
// followed by calling the jQuery library
let error = false;
const errorMessage = 'An Error Occurred';
$('#myButton').on('click', () => {
  error = true; // pretend some error occurs and set error = true
  if (error) {
    $('#app')
       .append(`<p id="error">${errorMessage}</p>`);
  } else {
    $('#error').remove();
  }
});