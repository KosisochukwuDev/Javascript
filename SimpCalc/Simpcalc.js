// let firstValue = Number(document.getElementById('first').value);
// let secondValue = Number(document.getElementById('second').value);
// let result = Number(document.getElementById('display').value);

function add(){
    let firstValue = Number(document.getElementById('first').value);
    let secondValue = Number(document.getElementById('second').value);
    let result = document.getElementById('display');

    let addition = firstValue + secondValue;
    result.innerText = addition;
    console.log(addition)
}

function subtract(){
    let firstValue = Number(document.getElementById('first').value);
    let secondValue = Number(document.getElementById('second').value);
    let result = document.getElementById('display');

    let subtraction = firstValue - secondValue;
    result.innerText = subtraction;
    console.log(subtraction)
}

function divide(){
    let firstValue = Number(document.getElementById('first').value);
    let secondValue = Number(document.getElementById('second').value);
    let result = document.getElementById('display');

    let division = firstValue / secondValue;
    result.innerText = division;
    console.log(division)
}

function multiply(){
    let firstValue = Number(document.getElementById('first').value);
    let secondValue = Number(document.getElementById('second').value);
    let result = document.getElementById('display');

    let multiplication = firstValue * secondValue;
    result.innerText = multiplication;
    console.log(multiplication)
}
console.log('Hi')