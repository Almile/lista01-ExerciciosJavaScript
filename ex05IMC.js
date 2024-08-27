const prompt = require('prompt-sync')()

let weight = Number(prompt("Digite seu peso: "))
let height = Number(prompt("Digite sua altura: "))

let Imc = weight / (height * height)

if (Imc <= 18.5) {
    console.log("Abaixo do peso")
}
else if (Imc <= 24.9) {
    console.log("Peso normal")
}
else if (Imc <= 29.9) {
    console.log("Sobrepeso")
}
else if (Imc <= 34.9) {
    console.log("Obesidade grau I")
}
else if (Imc <= 39.9) {
    console.log("Obesidade grau II")
}
else if (Imc >= 40) {
    console.log("Obesidade grau III")
}