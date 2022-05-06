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

const operatorButtons = document.querySelectorAll('.op-btn');
const total = document.querySelector('#total');
console.log(total);

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        total.textContent = button.textContent;
    })
});