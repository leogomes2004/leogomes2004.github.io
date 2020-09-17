 console.log('Jogando Jokenpô!');

 let placarJogador= 0;
 let placarComptador=0;

 //Cache do DOM (Document Object Model)
 //Ligar os elementos HTML em variaveis Javascript
 const placarJogador = document.querySelector('#placar-jogador');
 const placarComputadorSpan  = documet.querySelector('#placar-computador');
 const resultadoP = document.querySelector('resultado');
 const pedraButton = document.querySelector('#pedra');
 const papelButton = document.querySelector('#papel');
 const tesouraButton = document.querySelector('#tesoura');

 //Pegar a jogada co computador
 function getEscolhaComputador(){
     const escolhaDoComputador =['pedra','papel','tesoura']
     //Gerando um numero aleatorio entre 0 e 2 
     const numeroAleatorio = Math.floor(Math.random() * 3);
     return escolhasDoComputador[numeroAleatorio];

 }
 //Função principal de aplicação
 function app() {
     //Adicionando escuta de evento click
     pedraButton.addEventListener('click,function'() {
         console.log('clicou na pedra');
         jogo('pedra');



      )}

      papelButton.addEventListener('click',function(){
        console.log('Clicou no papel');
        jogo('papel');
    });
    tesouraButton.addEventListener('click',function(){
        console.log('Clicou na tesoura')
        jogo('tesoura');
    });
 


 }

//chamada da função
app() 

placarJogador++;
placarJogadorSpan.innerText = placarJogado
resultadoP.inner.text = $(escolhaDoJogador) vence $(escolhaDoComputador), voce venceu;


//comparando as jogadas

switch(escolhaDoComputador+escolhaDoJogador){
    case 'pedraTesoura';
    case 'papelPedra';
    case 'tesouraPapel';
    console.log('perdeu playboy');
    function perdeu(escolhaDoComputador,escolhaDoJogador) {
        //Incrementar o placar
        placarComputador++;
        placarComputadorSpan.innerText = placarComputador;
        resultadoP.innerText = `${escolhaDoJogador} perde para ${escolhaDoComputador}. Você perdeu!`;
     
    perdeu(escolhaDoComputador+escolhaDoJogador);
    break;
    case'tesourapapel';
    case'pedraPapel';
    case 'papelTesoura';
    console.log('venceu campeão');
    venceu(escolhaDoComputador+escolhaDoJogador);
    break;
    case'tesouratesoura';
    case'pedraPedra';
    case'papelpapel';
    console.log('Empate');
    empatou(escolhaDoComputador+escolhaDoJogador);
    function empatou(escolhaDoComputador,escolhaDoJogador) {
        resultadoP.innerText = `${escolhaDoJogador} empata com ${escolhaDoComputador}. Empatou!`;
     
    break;
    
}
}






