function add(a, b) { return a + b }
function subtract(a, b) { return a - b }
function multiply(a, b) { return a * b }
function divide(a, b) { return a / b }
function operate(op, a, b) { console.log(op(a, b)) }

const runningEquation = document.querySelector('#running-equation');
const result = document.querySelector('#total');
const clearButton = document.querySelector('#clear-btn');
const deleteButton = document.querySelector('#delete-btn');
const equalsButton = document.querySelector('.eq-btn');
const numberButtons = document.querySelectorAll('.num-btn');
const symbolButtons = document.querySelectorAll('.sym-btn');
const inputtedNums = [];

console.log(clearButton);
console.log(deleteButton);
console.log(runningEquation);
console.log(result);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        inputtedNums.push(button.textContent);
        if (result.textContent == "0") result.textContent = "";
        result.textContent += button.textContent;
        console.log(inputtedNums);
    })
});

//when a symbol button is clicked update runningEquation in display
symbolButtons.forEach(button => {
    button.addEventListener('click', () => {
        inputtedNums.push(button.textContent);
        runningEquation.textContent = inputtedNums.toString();
        result.textContent = " "
    })
});

clearButton.addEventListener('click', () => {
    result.textContent = " ";
    inputtedNums.length = 0;
    runningEquation.textContent = " ";
});

deleteButton.addEventListener('click', () => {
    result.textContent = " ";
});

equalsButton.addEventListener('click', () => {
    let parsed = formatInput(inputtedNums);
    console.log("Parsed:", parsed);
    operate(parsed[0], parsed[1], parsed[2]);
});

function formatInput(arr) {
    let op;

    arr.forEach(x => {
        if (x == "+" || x == "-" || x == "/" || x == "*")
            op = x;
    });

    arr = arr.join('').split(`${op}`)
    let firstValue = +(arr[0]);
    let secondValue = +(arr[1]);
    op = opSymbolToString(op);
    return [op, firstValue, secondValue];
}

// pass symbol: + - / * and receive plus minus divide multiply 
function opSymbolToString(op) {
    if (op == "+") return add;
    if (op == "-") return subtract;
    if (op == "*") return multiply;
}