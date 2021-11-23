// const userInput = prompt('What is your percentage?');

// if(userInput >= 80) {
//   alert('Your letter grade is A.');
// } else if (userInput >= 70 && userInput < 80 ) {
//   alert('Your letter grade is B.');
// } else if (userInput >= 60 && userInput < 70 ) {
//   alert('Your letter grade is C.');
// } else if (userInput >= 50 && userInput < 60 ) {
//   alert('Your letter grade is D.');
// } else {
//   alert('Your letter grade is F.');
// }

const userInput = prompt('What is your percentage?');
const headingSelector = document.getElementsByTagName('h2')[0];


  if(userInput >= 80) {
   headingSelector.innerHTML = 'A';
  } else if (userInput >= 70 && userInput < 80 ) {
    headingSelector.innerHTML = 'B';
  } else if (userInput >= 60 && userInput < 70 ) {
    headingSelector.innerHTML = 'C';
  } else if (userInput >= 50 && userInput < 60 ) {
    headingSelector.innerHTML = 'D';
  } else {
    headingSelector.innerHTML = 'F';
  }