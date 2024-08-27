const prompt = require('prompt-sync')()

let num = Number(prompt("Digite um número (0/10): "))
if (num < 0 || num > 10) {
    console.log("Digite um número de 0 a 10.")
}else{
    for (let t = 1; t <= 10; t++) {
        let result = num * t
        console.log(`${num} X ${t} = ${result}`)
    }
}