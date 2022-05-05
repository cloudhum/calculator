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

// console.log(add(1,2));
// console.log(subtract(1,2));
// console.log(multiply(1,2));
// console.log(divide(1,2));
operate(add, 1, 3);