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
const equal = document.getElementById('equal')

let num1 = null
let num2 = null
let operator = null
let result = null

plus.onclick = () => setOperator('add')
minus.onclick = () => setOperator('subtract')
division.onclick = () => setOperator('divide')
multi.onclick = () => setOperator('multiply')
nine.onclick = () => setNum('9')
eight.onclick = () => setNum('8')
seven.onclick = () => setNum('7')
six.onclick = () => setNum('6')
five.onclick = () => setNum('5')
four.onclick = () => setNum('4')
three.onclick = () => setNum('3')
two.onclick = () => setNum('2')
one.onclick = () => setNum('1')
zero.onclick = () => setNum('0')
equal.onclick = () => operate(num1, num2, operator)

function setNum (num) {
    if ((num1 === null) && (operator=== null)) {
        num1 = num
    } else if (num1 && operator === null) {
        num1 += num
    }
    if (operator != null && !num2) {
        num2 = num
    } else if ((operator != null) && num2) {
        num2 += num
    }
}

function setOperator(opp) {
    operator = opp;
}

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
        result = add(num1, num2);
    }
    if (operator === 'subtract') {
        result = subtract(num1, num2);
    }
    if (operator === "multiply") {
        result = multiply(num1, num2);
    }
    if (operator === "divide") {
        result = divide(num1, num2);
    }
}