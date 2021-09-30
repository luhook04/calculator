// declare references variables
const display = document.querySelector('#display');
const clearBtn = document.querySelector('#clear');
const multBtn = document.querySelector('#multiply');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#subtract');
const divBtn = document.querySelector('#divide');

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
  if (display.textContent === '0') {
    display.textContent = e.target.textContent;
  }
  else {
    display.textContent += e.target.textContent;
  }
};

// added the clear function to update display to 0 when clear button is clicked
const clearDisplay = () => {
  display.textContent = '0';
};

clearBtn.addEventListener('click', clearDisplay);

// applys the updateDisplay function to each number on click
numbers.forEach((number) => {
  number.addEventListener('click', updateDisplay);
});
