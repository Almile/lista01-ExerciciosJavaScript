const prompt = require('prompt-sync')()

let macas = Number(prompt("Digite o numero de maças compradas: "))
let total,vlMaca 

if(macas < 12){
    vlMaca = 0.30
}else{
    vlMaca = 0.25
}
total = vlMaca * macas
console.log(`O valor pago por ${macas} maça(s) é R$${total.toFixed(2)}`)
