let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let currentOperasi = '';
let operator = '';
let previousOperasi = '';

buttons.map(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (value === 'AC') {
            currentOperasi = '';
            previousOperasi = '';
            operator = '';
            display.value = '';
        } else if (value === '%') {
            operator = '%';
            previousOperasi = currentOperasi;
            currentOperasi = '';
        } else if (value === 'x^y') {
            operator = '^';
            previousOperasi = currentOperasi;
            currentOperasi = '';
        } else if (value === '/' || value === '*' || value === '-' || value === '+') {
            operator = value;
            previousOperasi = currentOperasi;
            currentOperasi = '';
        } else if (value === '=') {
            if (operator === '+') {
                currentOperasi = parseFloat(previousOperasi) + parseFloat(currentOperasi);
            } else if (operator === '-') {
                currentOperasi = parseFloat(previousOperasi) - parseFloat(currentOperasi);
            } else if (operator === '*') {
                currentOperasi = parseFloat(previousOperasi) * parseFloat(currentOperasi);
            } else if (operator === '/') {
                currentOperasi = parseFloat(previousOperasi) / parseFloat(currentOperasi);
            } else if (operator === '%') {
                currentOperasi = parseFloat(previousOperasi) % parseFloat(currentOperasi);
            } else if (operator === '^') {
                currentOperasi = Math.pow(parseFloat(previousOperasi), parseFloat(currentOperasi));
            }
            display.value = currentOperasi;
            operator = '';
            previousOperasi = '';
        } else {
            currentOperasi += value;
            display.value = currentOperasi;
        }
    });
});
