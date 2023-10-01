const displayArea = document.getElementById('display');
let operator = '';
let number1 = '';
let number2 = '';

const numberButtons = document.querySelectorAll('.numbers');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator === '') {
            number1 += button.textContent;
            display(number1);
        } else {
            number2 += button.textContent;
            display(number2);
        }
    });
});

const operatorButtons = document.querySelectorAll('.operate');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        display(operator);
    });
}); 

function display(value) {
    displayArea.value = value;
}

const equalButton = document.getElementById('equal');
equalButton.addEventListener('click', () => {
    if (number1 !== '' && operator !== '' && number2 !== '') {
        console.log(number1, number2, operator);
        const result = operate(parseFloat(number1), operator, parseFloat(number2));
        display(result);

    }
});

const clearButton = document.getElementById('allClear');
clearButton.addEventListener('click', () => {
    number1 = '';
    number2 = '';
    operator = '';
    display('');
});


const decimalButton = document.getElementById('decimal');
decimalButton.addEventListener('click', () => {
    if (operator === '') {
        if (!number1.includes('.')) {
            number1 += '.';
            display(number1);
        }
    } else {
        if (number2 === '' || number2 === '0') {
            number2 = '0.'; 
        }
        if (!number2.includes('.')) {
            number2 += '.';
            display(number2);
        }
    }
});




const backButton = document.getElementById('delete');
backButton.addEventListener('click', () => {
    if (operator === '') {
        number1 = number1.slice(0, -1);
        display(number1);
    } else {
        number2 = number2.slice(0, -1);
        display(number2);
    }
});

function add(a, b)  {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Naaah";
    return a / b;
}

function operate(a, op, b) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            if (b === 0) return "Naaah";
            return divide(a, b);
        default:
            return "Invalid Operator";
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const button = document.getElementById(key);
    if (button) {
        button.click();
    }
});
