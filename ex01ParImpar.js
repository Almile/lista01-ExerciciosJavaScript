const prompt = require('prompt-sync')()

let num = Number(prompt("Digite um número: "))

if (num % 2 === 0) {
    console.log("Número Par")
}else {
    console.log("Número Ímpar")
}