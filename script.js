// script.js
let currentValue = 0;

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.textContent = currentValue;
}

const addButton = document.getElementById('addButton');
const minusButton = document.getElementById('minusButton');

addButton.addEventListener('click', function () {
    if (currentValue < 10) {
        currentValue += 1;
        updateDisplay();
    }
});

minusButton.addEventListener('click', function () {
    if (currentValue > 0) {
        currentValue -= 1;
        updateDisplay();
    }
});

updateDisplay();