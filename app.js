// declare variables
const display = document.querySelector('#display');
const equal = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');
const multBtn = document.querySelector('#multiply');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#subtract');
const divBtn = document.querySelector('#divide');

let inputArray = [];
let operatorArray = [];
let numberArray = [];
let userNum;

// select all buttons with a number and operand
const numbers = document.querySelectorAll('.numbers button');
const operators = document.querySelectorAll('.operators button');

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

// function that takes all the math functions
const operate = (operator, a, b) => {
  switch (operator) {
    case '+':
      result = add(a, b);
      break;

    case '*':
      result = multiply(a, b);
      break;

    case '/':
      result = divide(a, b);
      break;

    case '-':
      result = subtract(a, b);
      break;

    default:
      console.log('ERROR...');
  }
  return result;
};

// updates display to equal the sequence of button hits before user hits an operator
const updateDisplay = () => {
  if (inputArray.length === 0) {
    inputArray.push(0);
  }
  display.textContent = inputArray.join('');
};

// adds a function to each number click that puts it's value in the inputArray
// and updates the display
numbers.forEach((number) => {
  number.addEventListener('click', function(e) {
    if (inputArray[0] == 0) {
      inputArray.pop();
    }
    inputArray.push(e.target.textContent);
    updateDisplay();
  });
});

// each time an operator is clicked it adds operator to an array
// and joins all the separate numbers of the number array together in the next index
operators.forEach((operator) => {
  operator.addEventListener('click', function(e) {
    userNum = inputArray.join('');
    if (userNum !== '') {
      numberArray.push(userNum);
    }
    inputArray.length = 0;
    operatorArray.push(e.target.textContent);
  });
});

// sets display back to zero and resets all stored values
clearBtn.addEventListener('click', function() {
  inputArray = [];
  numberArray = [];
  operatorArray = [];
  display.textContent = 0;
});

// iterates through the arrays and plugs them as args into the operate function
equal.addEventListener('click', function() {
  numberArray.push(inputArray.join(''));
  if (
    operatorArray.length > 0 &&
    numberArray.length == operatorArray.length + 1
  ) {
    for (let i = 0; i < numberArray.length - 1; i++) {
      numberArray[i + 1] = operate(
        operatorArray[i],
        parseFloat(numberArray[i]),
        parseFloat(numberArray[i + 1])
      );
    }
    let result = numberArray.pop();
    if (result == Infinity || result == -Infinity) {
      console.log('Infinite');
    }
    else {
      display.textContent = result.toFixed(2);
    }
    inputArray.length = 0;
    numberArray.length = 0;
    operatorArray.length = 0;
  }
  else {
    console.log('Invalid Input');
    inputArray.length = 0;
    numberArray.length = 0;
    operatorArray.length = 0;
  }
});
