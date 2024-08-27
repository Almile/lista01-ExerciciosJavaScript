const prompt = require('prompt-sync')()

let soma = 0;
for (let n = 0; n < 5; n++) {
    let num = Number(prompt("Digite um número: "))
    soma += num
}

console.log(soma)