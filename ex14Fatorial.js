const prompt = require('prompt-sync')()

let num = Number(prompt("Digite um número: "))
let fatorial = num
for (let f = num - 1; f > 1; f--) {
    fatorial *= f
}

console.log(`O fatorial de ${num} é : ${fatorial}`)