// declare references variables
const display = document.querySelector('#display');

// select all buttons with a number
const numbers = document.querySelectorAll('.numbers');
// basic math functions
const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

// takes a math function and it's arguments and returns the answer
const operate = (func) => {
  return func;
};

// updates display to text content of clicked button
const updateDisplay = (e) => {
  display.textContent += e.target.textContent;
};

// applys the updateDisplay function to each number on click
numbers.forEach((number) => {
  number.addEventListener('click', updateDisplay);
});
