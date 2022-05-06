function add(a,b){
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a/b; 
}

function operate(op, a, b) {
    console.log(op(a,b));
}

const numberButtons = document.querySelectorAll('.num-btn');
const symbolButtons = document.querySelectorAll('.sym-btn');
const runningEquation = document.querySelector('#running-equation');
console.log(runningEquation);
const result = document.querySelector('#total');
console.log(result);
const inputtedNums = [];

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        inputtedNums.push(button.textContent);
        //if it's ONLY zero remove it
        if (result.textContent == "0") result.textContent = "";
        result.textContent += button.textContent;
        console.log(inputtedNums);
    })
});

//when a symbol button is clicked update running equation display
// symbolButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         inputtedNums.push(button.textContent);
//         runningEquation.textContent = inputtedNums.toString();
//     })
// })
