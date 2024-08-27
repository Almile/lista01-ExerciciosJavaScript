const prompt = require('prompt-sync')()

let num = Number(prompt("Digite a sua idade: "))


if(num > 0 && num <= 12){
    console.log("Criança")
}
else if (num >= 13 && num <= 17) {
    console.log("Adolescente")
}
else if (num >= 18 && num <= 59) {
    console.log("Adulto")
}
else if (num >= 60) {
    console.log("Idoso")
}else{
    console.log("Digite uma idade válida.")
}
