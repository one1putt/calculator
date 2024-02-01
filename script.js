const display = document.querySelector('#display')
const numbers = document.querySelectorAll('.number')
const clear = document.querySelector('#clear')
const equal = document.querySelector('#equal')
const back = document.querySelector('#back')

// an array holding all the current entries a user has entered
let clickText = []

clear.addEventListener('click', clearDisplay)
equal.addEventListener('click', (e) => updateDisplay(e.target.textContent))
back.addEventListener('click', backSpace)
for (button of numbers) {
    button.addEventListener('click', (e) => updateDisplay(e.target.textContent))
}

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

// this function is triggered by the clicking of the equal button
// first we make the equation a String, extract out the numbers, then extract out the operands (as there may be multiple). then we loop through the calculation for as many operands as we have to get the answer.
// if the answer is not a valid number meaning an invalid equation has been entered we return error.
function calculate(equation) {
    let inputString = equation.join('')
    let numberList = inputString.split(/[-+*/]/)
    let operands = getOperands(equation)
    a = Number(numberList.shift())
    for (let operand of operands) {
        b = Number(numberList.shift())
        console.log(a)
        console.log(b)
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
                    display.style.fontSize = '20px'
                    return "Popamakadangdang, you divided by 0!!"
                }
                a = divide(a, b)
                break
            default:
                a = 'error'
        }
    }
    if (isNaN(a)) return 'error'
    return (Math.round(a * 100000000) / 100000000)
}

// every time a button is clicked (except equal and clear) we update the display to show that char.
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

function clearDisplay() {
    display.textContent = ''
    clickText = []
    display.style.fontSize = '64px'
}

// this will extract the operands from the equation and put them in an Array.
function getOperands (equation) {
    let operands = []
    for (item of equation) {
        if (!(0 <= item && item <= 9 || item === '.')) {
            operands.push(item)
        }
    }
    return operands
}

// will delete the last itme on the screen
function backSpace() {
    console.log(clickText)
    clickText.pop()
    console.log(clickText)
    display.textContent = clickText.join('')
}