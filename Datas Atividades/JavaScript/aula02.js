/******
 * Arrays - Estrutura de dados
 * Quando queremos armazenar mais de um dado em uma única variável, podemos utilizar os arrays.
*/

let alunos = ["João", "Maria", "Pedro", "Ana", "Lucas", "Carla"];
//mostra todos os alunos
console.log(alunos);
//mostra um aluno
console.log(alunos[0]);

for(let i=0; i < alunos.length; i++){
    console.log(alunos[i]);
}

let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];
console.log(frutas.length); //retorna o tamanho do array    
frutas.push("Melancia");    //adiciona um elemento no final do array
console.log(frutas);

//remove um elemento na utima posiçao do array
frutas.pop();
console.log(frutas);

//adicionar ao inicio do array
frutas.unshift("Morango");
console.log(frutas);

//remove o primeiro elemento do array
frutas.shift(); 
console.log(frutas);

//verifica se um elemento existe dentro do array
console.log(frutas.includes("Banana")); 



/************
 * Array - matrizes
 * no javascript é uma array dentro de uma array
 */

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matriz[0][0]); //1
console.log(matriz[1][1]); //5
console.log(matriz[2][2]); //9 

for(let i=0;i<matriz.length;i++){
    for(let j=0;j<matriz.length;j++){
        console.log(matriz[i][j])
    }
}

