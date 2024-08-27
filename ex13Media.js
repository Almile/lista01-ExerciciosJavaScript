const prompt = require('prompt-sync')()

let c = 0
let soma = 0 
let media,num
do{
    num = Number(prompt("Digite um número: "))
    soma += num
    c++
}while(num !== 0)

media = soma / (c-1)

console.log(media.toFixed(2))