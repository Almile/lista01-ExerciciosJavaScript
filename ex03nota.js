const prompt = require('prompt-sync')()

let note = Number(prompt("Digite uma nota(0/10): "))
if (note < 0 || note > 10) {
    console.log("Digite um número de 0 a 10.")
}else{
    if (note < 5) {
        console.log("Reprovado")
    }else if(note < 7){
        console.log("Recuperação")
    }else{
        console.log("Aprovado")
    }
}