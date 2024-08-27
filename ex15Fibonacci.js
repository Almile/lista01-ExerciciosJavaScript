
let firstNumber = 1
let secondNumber = 1
let fibonacciNumber = 0

for (let sequence = 0; sequence < 10; sequence++) 
{
    console.log(firstNumber)
    fibonacciNumber = secondNumber + firstNumber
    firstNumber = secondNumber
    secondNumber = fibonacciNumber
}