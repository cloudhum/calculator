function add(a, b) { return a + b }
function subtract(a, b) { return a - b }
function multiply(a, b) { return a * b }
function divide(a, b) { return a / b }
function operate(op, a, b) { 
    a = +a;
    b = +b;
    return op(a, b); 
}

const result = document.querySelector('#total');
const clearButton = document.querySelector('#clear-btn');
const deleteButton = document.querySelector('#delete-btn');
const equalsButton = document.querySelector('.eq-btn');
const numberButtons = document.querySelectorAll('.num-btn');
const symbolButtons = document.querySelectorAll('.sym-btn');

let firstValue = 0;
let secondValue = 0;
let currentOperator = '';
let newResult = 0;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentOperator != '') result.textContent = '';
        result.textContent += button.textContent;
    })
});

clearButton.addEventListener('click', () => {
    result.textContent = " ";
    firstValue = 0;
    secondValue = 0;
    currentOperator = '';
});

symbolButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstValue == 0 && secondValue == 0){
            currentOperator = button.textContent;
            firstValue = result.textContent;
        }
        else if (firstValue != 0 && secondValue == 0){
            secondValue = result.textContent;
            currentOperator = opSymbolToString(currentOperator);
            // pull newResult out into global scope
            // remove plus symbols below
            newResult = operate(currentOperator, firstValue, secondValue);
            firstValue = newResult;
            result.textContent = newResult;
            currentOperator = button.textContent;
            secondValue = 0;
        }
    })
});

equalsButton.addEventListener('click', () => {
    // FIXME: pressing = before entering all the numbers or an operator causes problems
    if(firstValue != 0 && secondValue == 0) secondValue = result.textContent;
    currentOperator = opSymbolToString(currentOperator);
    newResult = operate(currentOperator, firstValue, secondValue); 
    firstValue = newResult;
    result.textContent = newResult;
});

function opSymbolToString(op) {
    if (op == "+") return add;
    if (op == "-") return subtract;
    if (op == "*") return multiply;
}
