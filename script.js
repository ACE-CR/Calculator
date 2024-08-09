// Get the display element
var display = document.getElementById('display');

// Variable to store the calculation
var calculation = '';

// Function to clear the display
function clearDisplay() {
  display.value = '';
  calculation = '';
}

// Function to delete the last character
function deleteLast() {
  calculation = calculation.slice(0, -1);
  display.value = calculation;
}

// Function to append a value to the display
function append(value) {
  calculation += value;
  display.value = calculation;
}

// Function to calculate the result
function calculate() {
  var result = 0;
  try {
    result = eval(calculation);
  } catch (error) {
    result = 'Error';
  }
  display.value = result;
  calculation = result;
}

