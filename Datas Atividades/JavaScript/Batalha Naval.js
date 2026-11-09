/*************************************************************
 * Diego Paiani
 * Versão: 01
 * Data 06/11/2026
 * Projeto Batalha Naval em Node.js
 ************************************************************/

const teclado = require("prompt-sync")();
var Fim_jogo = true;

// configura a saida do jogo
while(Fim_jogo){

    // variaveis de ambiente
    let Tamanho_Mapa = 5;
    let Quant_Barcos = 5;
    let Pontos = 0;
    let Quant_jogadas = 5;
    let Quant_Tiros = 5;

    // cria uma matriz
    let Tabuleiro = [];

    // preenche o mapa com agua
    for(let linha = 0; linha <= Tamanho_Mapa; linha++){
        // cria o mapa do jogo
        Tabuleiro[linha] = [];
        for(let coluna = 0; coluna <= Tamanho_Mapa; coluna++){
            Tabuleiro[linha][coluna] = false;
        }
    }
    /***************
     * false = agua
     * true = barco
     */

    // console.log(Tabuleiro);

    /******************************************
     * Sortea a posicao dos barcos
     * Posiciona os barcos no tabuleiro
     */
    for(let i = 0; i <= Quant_Barcos; i++){
        let PosicaoX = parseInt(Math.floor(Math.random() *5));
        let PosicaoY = parseInt(Math.floor(Math.random() *5));
        Tabuleiro[PosicaoX][PosicaoY] = true;
    }

    console.log(Tabuleiro);

    /****************************
     * Jogada do player
     */

    for(let j = 1; j <= Quant_jogadas; j++){
        let TiroPosicaoX = parseInt(teclado("Digita a coordenada em x:"));
        let TiroPosicaoY = parseInt(teclado("Digite a coordenada em y:"));

        // verifica se não é numero
        // if(isNaN) ---> Retorna true se nao e numero
        // || ---> se qualquer uma das condições se satisfaz retorna true

        if(isNaN(TiroPosicaoX) || isNaN(TiroPosicaoY)){
            console.log("Digite uma coordenada válida!");
            TiroPosicaoX = teclado("Digita a coordenada em x:");
            TiroPosicaoY = teclado("Digite a coordenada em y:");
        }
        
        // verifica se o tiro acertou um barco
        if(Tabuleiro[TiroPosicaoX][TiroPosicaoY] === true){
            // acerto um barco
            console.log("*****************************");
            console.log("**** BARCO NAUFRAGADO ****");
            console.log("*****************************");
            Pontos += 10;
        }

        // verifica se um tiro acertou na agua
        if(Tabuleiro[TiroPosicaoX][TiroPosicaoY] === false){
            // acerta na agua
            console.log("*****************************");
            console.log("**** TIRO NA ÁGUA ****");
            console.log("*****************************");
        }

        // reduz a quantidade de tiros
        Quant_Tiros--;

        // quantidade de tiros
        console.log("********************************");
        console.log("**** Tiros restantes:", Quant_Tiros);

        // Quantidode de pontos
        console.log("********************************");
        console.log("**** Potuação:", Pontos);

        // sistema de pontuacao
        if(Quant_Tiros == 0){
            if(Pontos >= 50){
                console.log("********************************");
                console.log("**** PARABENS VOCÊ VENCEU ! ! ! ****");
                console.log("********************************");
            }else{
                console.log("********************************");
                console.log("**** TENTE NOVAMENTE ! ! ! ****");
                console.log("********************************");
            }
        }
    }
    // encerra o jogo ou continua nova partida
    // n + enter = pra continuar

    let Continuar = teclado("** Digite n para jogar novamente... **");
    
    if(Continuar == "n"){
        Fim_jogo = true;
    }else{
        Fim_jogo = false;
    }
}

/** Desafios fáceis

1. Validar as coordenadas
Seu código verifica se o valor não é numérico, mas não verifica se a coordenada está 
dentro do tabuleiro.

2. Evitar barcos na mesma posição
Atualmente, você pode sortear dois barcos na mesma posição.

Isso acontece porque não existe uma verificação antes de posicionar um novo barco.


3. Impedir que o jogador acerte o mesmo barco várias vezes

Este é um problema importante!
Quando o jogador acerta um barco, você soma 10 pontos, mas não altera o valor da matriz.
Assim, ele pode atirar novamente na mesma posição e ganhar mais 10 pontos.

 */
