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

 
 let idade = 10; // sintaxe mais moderna do javascript
 var Idade = 41; // sintaxe mais antiga do javascript
 const _idade = 32; // um valor que não pode ser alterado

/*
* Tipos de dados
* cada caixa tem um tipo de dado 
*/

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

/*
 * operadores aritméticos
 * são usados para realizar cálculos matemáticos
*/

let numero1 = 10;
let numero2 = 5;

console.log(numero1 + numero2); //soma
console.log(numero1 - numero2); //subtração
console.log(numero1 * numero2); //multiplicação
console.log(numero1 / numero2); //divisão
console.log(numero1 % numero2); //resto da divisão
console.log(numero1 ** numero2); //exponenciação

/*
    * operadores condicionais
    * são usados quando queremos 
    * que o código tome uma decisão
*/

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

/* 
 * operadores lógicos
 * são usados quando queremos juntar operadores condicionais
 * 
*/

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


/**
 * conversão de tipos - cast
 * converte texto para numero
 */
let numero4 = "10"; // string
let numero5 = "20"; // string

console.log(typeof numero4);
console.log(typeof numero5);

numero5 = Number(numero5);
console.log(typeof numero5);
