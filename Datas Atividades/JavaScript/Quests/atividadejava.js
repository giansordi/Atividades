/**
 * Lista de exercícios:
 * 1. Escreva um programa que leia um número e imprima se este número é par ou ímpar.
 * 2. Escreva um programa que leia três números e mostre o maior entre eles.
 * 3. Escreva um programa que dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro; É dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo; E, dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma; E, dado os três lados de um triângulo determinar o perímetro do mesmo. Utilize um Menu de opções.
 */

const teclado = require("prompt-sync")();
/** 1.

    
    let numero = Number(teclado("Digite um numero: "));
    
    if (numero % 2 === 0){
        console.log("O numero é par");
    }else{
        console.log("O numero é impar");
    }

*/

/** 2.
 
let numero1 = Number(teclado("Digite o primeiro número: "));
let numero2 = Number(teclado("Digite o segundo número: "));
let numero3 = Number(teclado("Digite o terceiro número: "));

if (numero1 > numero2 && numero1 > numero3){
    console.log("O primeiro numero e maior");
}else if (numero2 > numero1 && numero2 > numero3){
    console.log("O segundo numero e maior");
}else {
    console.log("O tereiro numero e maior");
}

*/

/** 3.
 */

