const plus = document.getElementById('plusBtn')
const minus = document.getElementById('minusBtn')
const division = document.getElementById('divideBtn')
const multi = document.getElementById('multiplyBtn')
const nine = document.getElementById('nineBtn')
const eight = document.getElementById('eightBtn')
const seven = document.getElementById('sevenBtn')
const six = document.getElementById('sixBtn')
const five = document.getElementById('fiveBtn')
const four = document.getElementById('fourBtn')
const three = document.getElementById('threeBtn')
const two = document.getElementById('twoBtn')
const one = document.getElementById('oneBtn')
const zero = document.getElementById('zeroBtn')
const dec = document.getElementById('decimalBtn')
const clear = document.getElementById('clearBtn')

function add(a, b) {
    a = Number(a);
    b = Number(b);
    return a + b;
}

function subtract(a, b) {
    a = Number(a);
    b = Number(b);
    return a - b;
}

function multiply(a, b) {
    a = Number(a);
    b = Number(b);
    return a * b;
}

function divide(a, b) {
    a = Number(a);
    b = Number(b);
    if (b === 0) {return 'Undefined'};
    return a / b;
}

function operate(num1, num2, operator) {
    operator = operator.toLowerCase()
    if (operator === 'add') {
        return add(num1, num2);
    }
    if (operator === 'subtract') {
        return subtract(num1, num2);
    }
    if (operator === "multiply") {
        return multiply(num1, num2);
    }
    if (operator === "divide") {
        return divide(num1, num2);
    }
}