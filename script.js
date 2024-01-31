const display = document.querySelector('#display')
const numbers = document.querySelectorAll('.number')
const clear = document.querySelector('#clear')
const equal = document.querySelector('#equal')
const back = document.querySelector('#back')

let clickText = []

let firstNumber, secondNumber, operator

clear.addEventListener('click', clearDisplay)
equal.addEventListener('click', (e) => updateDisplay(e.target.textContent))
back.addEventListener('click', backSpace)


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
    let inputString = equation.join('')
    let numberList = inputString.split(/[-+*/]/)
    let operands = getOperands(equation)
    console.log(inputString)
    console.log(numberList)
    console.log(operands)
    a = Number(numberList.shift())
    for (let operand of operands) {
        b = Number(numberList.shift())
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
                if (b === 0) {
                    return "Popamakadangdang, you divided by 0!!"
                }
                a = divide(a, b)
                break
            default:
                a = 'error'
        }
    }
    if (isNaN(a)) return 'error'
    return a
}

function updateDisplay(char) {
    if (char === '=') {
        display.textContent = calculate(clickText)
        clickText = [display.textContent]
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
        if (!(0 <= item && item <= 9 || item === '.')) {
            operands.push(item)
        }
    }
    return operands
}

function backSpace() {
    console.log(clickText)
    clickText.pop()
    console.log(clickText)
    display.textContent = clickText.join('')
}