const prompt = require('prompt-sync')()

let n1 = Number(prompt("Digite o 1° número: "))
let n2 = Number(prompt("Digite o 2° número: "))

if (n1 < n2) {
    console.log(n1 +", "+n2)
}else{
    console.log(n2 +", "+n1)
}