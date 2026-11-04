// comentário de uma linha

/*
 comentário de linhas
 outra linha
 outra
*/

// entrada -> pela web aravés de formulários ou eventos do DOM
// saída -> console do navegador ou pra própria página através de tag
// entrada d dados -> acontece pelo terminal
//saida dos dados -> acontece pelo terminal

/* variaveis 
    é uma caixa que armazena um tipo de valor na memória do computador
    no javascript podemos criar uma variavel de 3 formas
    */


    /*
    let idade = 10; // sintaxe mais moderna do javascript
    var Idade = 41; // sintaxe mais antiga do javascript
    const _idade = 32; // um valor que não pode ser alterado
    /*

    * Tipos de dados
    * cada caixa tem um tipo de dado 

    // STRING(conjunto de caracteres, uma sequência)
    let nome = "João";

    // NUMBER - numeros decimais ou inteiros 
    let IDADE = 40; //numero inteiro
    let Altura = 1.75; //numero fracionado(com vírgula)

    // BOOLEAN - verdadeiro ou falso
    let Aprovado = true;
    var Dinheiro = false;

    // undefied - a variavel não foi atribuida

    let cidade; 

    // NULL - ausência intencional de valor
    let telefone = null;


    // retorno dos dados
    console.log(nome)
    console.log(IDADE)
    console.log(Altura)
    console.log(Aprovado)
    console.log(Dinheiro)
    console.log(cidade)
    console.log(telefone)


    // retorno dos tipos
    console.log(typeof nome)
    console.log(typeof IDADE)
    console.log(typeof Altura)
    console.log(typeof Aprovado)
    console.log(typeof Dinheiro)
    console.log(typeof cidade)
    console.log(typeof telefone)

*/

/*
    * operadores aritméticos
    * são usados para realizar cálculos matemáticos

    let numero1 = 10;
    let numero2 = 5;

    console.log(numero1 + numero2); //soma
    console.log(numero1 - numero2); //subtração
    console.log(numero1 * numero2); //multiplicação
    console.log(numero1 / numero2); //divisão
    console.log(numero1 % numero2); //resto da divisão
    console.log(numero1 ** numero2); //exponenciação
*/

/*
    * operadores condicionais
    * são usados quando queremos 
    * que o código tome uma decisão

    let idade2 = 35;

    console.log(idade < 18);
    console.log(idade > 18);
    console.log(idade <= 18);
    console.log(idade >= 18);

    console.log(idade < 18);
    console.log(idade > 18);
    console.log(idade <= 18);
    console.log(idade >= 18);

    let number1 = "15"
    let number2 = 15;
    
    console.log(number1 == number2);
    console.log(number1 === number2);
    console.log(number1 != 18);

*/

/* 
 * operadores lógicos
 * são usados quando queremos juntar operadores condicionais
 * 

    let idade3 = 20;
    let possuiCarteira = true;

    //  && - and/e 
    //  || - ou/or
    //  ! - 

    console.log(idade > possuiCarteira);

    console.log(idade > 18 && possuiCarteira); // verdadeiro

    idade = 16;
    possuiCarteira = false;

    console.log(idade > 18 ||  possuiCarteira); // verdadeiro

    let Gasolina = true;
    console.log(!Gasolina);

*/

/**
 * conversão de tipos - cast
 * converte texto para numero
let numero4 = "10"; // string
let numero5 = "20"; // string

console.log(typeof numero4);
console.log(typeof numero5);

numero5 = Number(numero5); // tipo numero
console.log(typeof numero5);
*/

/**
 * conversão de tipos 
 * numero para texto 

    let idade = 25;
    console.log(typeof idade);
    idade = String(idade);
    console.log(typeof idade);

*/

/***************
 * Conversão de tipos
 * nuero inteiros para decimais

    let valor1 = "15.90";
    let valo2 = "25.75";

    
    // numeros inteiros 
    console.log(parseInt(valor1));
    
    // numeros flutuante
    console.log(parseFloat(valo2));
    
*/

/**********
 * entrad de dados pelo terminal
const prompt = require("prompt-sync")();

let numero1 = prompt("Digite um numero:")
let numero2 = prompt("Digite outro numero:")

numero1 = Number(numero1); // cast para numero
numero2 = Number(numero2); 

console.log("Numero digitado foi:", numero1);
console.log("Numero digitado foi:", numero2);

let resultado = numero1 + numero2;
console.log("Resultado da soma é:", resultado);
*/

/*******
 * ordem de precedência 
 * ordem 1 - divisao 2 - multiplicação 3 - soma e subtração
 */

//let opreacao = (numero1 + numero2) / numero3;

/**
     * condicionais 
     * estruturas de bloco

    let notap1 = 7.8;
    let notap2 = 8;
    let notap3 = 7;

    let resultado = (notap1 + notap2 + notap3) / 3;

    console.log(resultado);

    if(resultado > 7){
        // bloco de código executado se a condição for verdadeira
        console.log("Aluno aprovado");
    }else{
        // bloco de código executado se a condição for falsa
    console.log("Aluno reprovado");
    }

    console.log("saiu do bloco")
*/

/**
 * bloco de condicao
 * encadeamento

let idade = 14;
if(idade > 18){
    console.log("maior de idade");
    if(idade > 60){
        console.log("idoso");
    }
}else{
    console.log("menor de idade");
if(idade < 15){
    console.log("criança");
}
}
*/

/***********
 * mais opçoes de verificaçao 
let nota = 7;

if(nota >= 7){
    console.log("Aprovado");
}
else if(nota >= 5){
    console.log("Recuperação");
}
else{
    console.log("Reprovado");
}
*/


/*******
 * juntando condiçoes 

let nota = 7;
if(nota > 8 && nota < 10){
    console.log("Excelente");
}
else{
    console.log("Precisa melhorar");
}
*/

/********
 * switch
 * estrutura de condicao composta


let dia = 6;
switch(dia){
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia inválido");
}

*/

/************
     * Operador ternario 

    let idade = 20;
    let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";
    console.log(resultado);

    // let e var -> alocam memoria 
*/

/**
 * estrutura de repetição
 * for

let i = 1;

for(i = 1; i < 10000; i = i + 1000){
    console.log(i);
}
*/

/****
 * while
 * necessita condico de parada

let contador = 1;

while(contador < 5){
    console.log(contador);
    contador++;
}
*/

//while(true){
//    alert("Hackeado")
//}

/**
 
let indice = 1;

do{
    console.log(indice);
    indice++;
}while(indice < 5);

 */