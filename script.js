const display = document.querySelector('#display')
const numbers = document.querySelectorAll('.number')
const clear = document.querySelector('#clear')
let clickText

let firstNumber, secondNumber, operator

clear.addEventListener('click', clearDisplay)

function add(a, b) {
    return a + b
} 

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function calculate(a, b, operator) {
    let answer
    switch(operator) {
        case '+':
            answer = add(a, b)
            break
        case '-':
            answer = subtract(a, b)
            break
        case '*':
            answer = multiply(a, b)
            break
        case '/':
            answer = divide(a, b)
            break
        default:
            answer = 'Not a proper operator'
    }
    return answer
}

function updateDisplay(char) {
    clickText = char
    let displayText = display.textContent
    displayText += char
    display.textContent = displayText
}

for (button of numbers) {
    button.addEventListener('click', (e) => updateDisplay(e.srcElement.textContent))
}

function clearDisplay() {
    display.textContent = ''
}