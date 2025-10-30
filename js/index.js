// Initialize display
const display = document.querySelector(".calculator-display");
const backspaceButton = document.querySelector(".backspace");

function appendToDisplay(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Added event listener for backspace button
backspaceButton.addEventListener("click", function() {
    let currentValue = display.value;
    let newValue = currentValue.slice(0, -1);
    display.value = newValue;
})

// To perform calculation
function calculate () {
   let numberOne = display.value;
   try {
        let numberTwo = eval(numberOne.replace('x', '*'));
        display.value = numberTwo;
   } catch {
        display.value = "Error";
   }
}