const teclado = require("prompt-sync")();

// Funções matemáticas
function Somar(a, b) {
    return a + b;
}

function Subtracao(a, b) {
    return a - b;
}

function Multiplicacao(a, b) {
    return a * b;
}

function Divisao(a, b) {
    return a / b;
}

// Entrada de dados
console.log("=== CALCULADORA ===");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");

let opcao = teclado("Digite uma opcao: ")

let x = Number(teclado("Digite o valor x: "));
let y = Number(teclado("Digite o valor y: "));

let Resultado;

switch(opcao){
    case "1":
        Resultado = Somar(x, y)
        break;
    case "2":
        Resultado = Subtracao(x, y)
        break;
    case "3":
        Resultado = Multiplicacao(x, y)
        break;
    case "4":
        if (y !== 0) {
            Resultado = Divisao(x, y);
        } else {
            console.log("Erro: não é possível dividir por zero!");
        }
        break;
    default:
        console.log("Opção inválida!");
}

console.log("Resultado do cálculo: ", Resultado);

