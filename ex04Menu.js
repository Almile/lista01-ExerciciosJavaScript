const prompt = require('prompt-sync')()

let choice = Number(prompt("Selecione uma das 3 opções: 1.Somar(+); 2.Subtrair(-); 3.Multiplicar(*):  "))

switch (choice) {
    case 1:
    console.log("1.Somar selecionado.")    
        break;
    case 2:
        console.log("2.Subtrair selecionado.")    
        break;
    case 3:
        console.log("3.Multiplicar selecionado.")    
        break;
    default:
        break;
}