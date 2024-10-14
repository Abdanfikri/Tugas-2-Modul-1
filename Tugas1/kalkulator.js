let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));
let currentOperand = '';
let operator = '';
let previousOperand = '';

buttons.map(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (value === 'AC') {
            currentOperand = '';
            previousOperand = '';
            operator = '';
            display.value = '';
        } else if (value === '%') {
            operator = '%';
            previousOperand = currentOperand;
            currentOperand = '';
        } else if (value === 'x^y') {
            operator = '^';
            previousOperand = currentOperand;
            currentOperand = '';
        } else if (value === '/' || value === '*' || value === '-' || value === '+') {
            operator = value;
            previousOperand = currentOperand;
            currentOperand = '';
        } else if (value === '=') {
            if (operator === '+') {
                currentOperand = parseFloat(previousOperand) + parseFloat(currentOperand);
            } else if (operator === '-') {
                currentOperand = parseFloat(previousOperand) - parseFloat(currentOperand);
            } else if (operator === '*') {
                currentOperand = parseFloat(previousOperand) * parseFloat(currentOperand);
            } else if (operator === '/') {
                currentOperand = parseFloat(previousOperand) / parseFloat(currentOperand);
            } else if (operator === '%') {
                currentOperand = parseFloat(previousOperand) % parseFloat(currentOperand);
            } else if (operator === '^') {
                currentOperand = Math.pow(parseFloat(previousOperand), parseFloat(currentOperand));
            }
            display.value = currentOperand;
            operator = '';
            previousOperand = '';
        } else {
            currentOperand += value;
            display.value = currentOperand;
        }
    });
});
