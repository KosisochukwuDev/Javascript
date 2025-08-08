let firstValue = document.getElementById('first');
let secondValue = document.getElementById('second');
let result = document.getElementById('display');
// let firstValue = 30;
// let secondValue = 40;

// let buttons = document.querySelectorAll("button")

// buttons.forEach(button => {
//     button.addEventListener("click", function () {
//         if (button.innerText === "add") {
//             result.innerText = Number(firstValue.value) + Number(secondValue.value)
//         }
//         else if (button.innerText === "subtract") {
//             result.innerText = Number(firstValue.value) - Number(secondValue.value)
//         }
//         else if (button.innerText === "divide") {
//             result.innerText = Number(firstValue.value) / Number(secondValue.value)
//         }
//         else if (button.innerText === "multiply") {
//             result.innerText = Number(firstValue.value) * Number(secondValue.value)
//         }
//         else {
//             console.log("wrong operation")
//         }
//     })
// });

// function calculator(operations) {
//     switch (operations) {
//         case 'add':
//             result.innerText = Number(firstValue.value) + Number(secondValue.value)
//             break;
//         case 'divide':
//             result.innerText = Number(firstValue.value) / Number(secondValue.value)
//             break;
//         case 'subtract':
//             result.innerText = Number(firstValue.value) - Number(secondValue.value)
//             break;
//         case 'multiply':
//             result.innerText = Number(firstValue.value) * Number(secondValue.value)
//             break;
//         default:
//             alert("invalid operation")
//     }
// }

function add(){
    // let firstValue = Number(document.getElementById('first').value);
    // let secondValue = Number(document.getElementById('second').value);
    // let result = document.getElementById('display');

    let addition = Number(firstValue.value) + Number(secondValue.value);
    result.innerText = addition;
    console.log(addition)
}

function subtract() {
    // let firstValue = Number(document.getElementById('first').value);
    // let secondValue = Number(document.getElementById('second').value);
    // let result = document.getElementById('display');

    let subtraction = Number(firstValue.value) - Number(secondValue.value);
    result.innerText = subtraction;
    console.log(subtraction)
}

function divide() {
    // let firstValue = Number(document.getElementById('first').value);
    // let secondValue = Number(document.getElementById('second').value);
    // let result = document.getElementById('display');

    let division = Number(firstValue.value) / Number(secondValue.value);
    result.innerText = division;
    console.log(division)
}

function multiply() {
    // let firstValue = Number(document.getElementById('first').value);
    // let secondValue = Number(document.getElementById('second').value);
    // let result = document.getElementById('display');

    let multiplication = Number(firstValue.value) * Number(secondValue.value);
    result.innerText = multiplication;
    console.log(multiplication)
}
console.log(firstValue.value)