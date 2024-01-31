const display = document.querySelector('#display')
const numbers = document.querySelectorAll('.number')
const clear = document.querySelector('#clear')
const equal = document.querySelector('#equal')

let clickText = []

let firstNumber, secondNumber, operator

clear.addEventListener('click', clearDisplay)
equal.addEventListener('click', (e) => updateDisplay(e.target.textContent))


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

function calculate(equation) {
    let inputString = equation.join().replaceAll(',', '')
    let numberList = inputString.split(/[-+*/]/)
    let operands = getOperands(equation)
    
    a = parseInt(numberList.shift())
    for (let operand of operands) {
        b = parseInt(numberList.shift())
        switch(operand) {
            case '+':
                a = add(a, b)
                break
            case '-':
                a = subtract(a, b)
                break
            case '*':
                a = multiply(a, b)
                break
            case '/':
                a = divide(a, b)
                break
            default:
                a = 'Not a proper operator'
        }
    
    }
    return a
}

function updateDisplay(char) {
    if (char === '=') {
        display.textContent = calculate(clickText)
        return
    }
    clickText.push(char)
    let displayText = display.textContent
    displayText += char
    display.textContent = displayText
}

for (button of numbers) {
    button.addEventListener('click', (e) => updateDisplay(e.target.textContent))
}

function clearDisplay() {
    display.textContent = ''
    clickText = []
}

function getOperands (equation) {
    let operands = []
    for (item of equation) {
        if (!(0 <= item && item <= 9)) {
            operands.push(item)
        }
    }
    return operands
}