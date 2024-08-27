const prompt = require('prompt-sync')()

let A = Number(prompt("Digite um lado do triângulo: "))
let C = Number(prompt("Digite um lado do triângulo: "))
let B = Number(prompt("Digite um lado do triângulo: "))

if (A === B && B === C) {
    console.log("Triângulo eqüilátero (possui todos os lados iguais)")
}else if (A === B && B === C) {
    console.log("Triângulo escaleno (possui todos os lados diferentes)")
}else if (A === B || A === C || B === C) {
    console.log("Triângulo isósceles (possui dois lados iguais)")
}