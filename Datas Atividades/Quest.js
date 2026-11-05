/**
 * 1. Crie um programa que solicite um número e mostre todos os numeros é o numero informado:
 
const prompt = require('prompt-sync')();
let numero_digitado = prompt('Digite um número: ');
for(let i = 1; i <= numero_digitado; i++){
    console.log(i);
}
*/

// 2. Crie um pequeno sistema de tabuada
/**
for(let i=1 ; i <= 10 ; i++){
    console.log(3*i);
}
*/

/**
 * 3. Crie um sistema de aprovaçao de alunos, ele deve ser assim:
 * solicitar o nome do aluno
 * solicitar 3 notas
 * Converter as notas para numeros
 * calcular media

const prompt = require("prompt-sync")(); // carrega a biblioteca
let nome_aluno = prompt("Digite o nome do aluno:");

let Nota1 = prompt("Digite a primeira nota: ");
let Nota2 = prompt("Digite a segunda nota: ");
let Nota3 = prompt("Digite a terceira nota: ");

Nota1 = Number(Nota1); // converte raa numero
Nota2 = Number(Nota2);
Nota3 = Number(Nota3);

//calcula media
let Media = (Nota1 + Nota2 + Nota3) / 3;

//verifica se a media esta entre 0 a 10
if(Media >= 0 && Media <= 10){
    //verifica se a media e maior que 7
    if(Media >= 7){
        console.log("Aluno aprovado");
    }
    //se ficar com media <= 4 alu reprova
    //se ficar com media entre 4 a 6 ele vai para recuperaçao
    //acima disso aprovado
    //verifica se a media esta entre 4 a 6
    else if(Media <= 6 && Media >= 4){
        console.log("Aluno em recuperação");
    }
    else{ // cso contrario esta reprovado 0 a 3
    console.log("Aluno reprovado");
    }
}
*/

/*****
 * Crie um programa que:
 * 1. Crie um Array com cinco nome de cidades.
 * 2. Mostre todos os nomes no console
 * 3. Adicione mais uma cidade.
 * 4. Remova a primeira cidade.
 * 5. Mostre a quantidade de cidades cadastradas.
 */

let cidades = ["Porto Alegre", "Bagé", "Nova Petrópolis", "Canoas", "São Leopoldo"];
console.log(cidades);

cidades.push("Viamão");
console.log(cidades);

cidades.shift();
console.log(cidades);