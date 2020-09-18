console.log('Inicio - Jogo da Cobrinha');
const canvas = document.querySelector('#snake');
const contexto = canvas.getContext('2d');
//Caixa de tamanho mínimo
//512  = 16 x 32
const box = 32;
const snake = [];


//Placar
let tamanho = {
    const tamanhoSpan = document.querySelector('#tamanho');
}

//Inicializa a cabeça da cobrinha na posição ZERO do vetor
snake[0] = {
    x: 8 * box,
    y: 8 * box
};

function.criarCenario() {
    contexto.fillStyle = 'Lightgreen';
    contexto.fillRect(0,0,16*box,16*box);
}
function criarCenario() {
    for(let i=0; < snake,lenght i++){
        contexto.fillStyle = 'green';
        contexto.fillRect(snake[i],x, snake[i]..y, box, box)
    }
}
//Adicionando uma escuta ao evento de prescionar as teclas do teclado
//atualizar a direção de acordo com a tecla pressionada
document.addEventListenier('keydown',atualizaDirection);
//httpskeycode.info/
if(EventSource,keycode === 37 && direction !== 'right')
direction ='left' //37 seta para a esquerda 
if(EventSource.keycode === 39 && direction !== 'down')
direction ='up'; //38 sete para cima
if(EventSource,keycode === 40 && direction !== 'up')
let direction =' right';


let comida = {
    x: Math.floor(Math.random() + 1 ) * box,
    y: Math.floor(math.random() + 1 ) * box
}

function criarcomida() {
    contexto fillStyle = 'red';
    contexto.fillRect(comida ,x, box, box);
}

//Detectar a colisão entre a cabeça e o corpo
   //Finalizar o jogo
   for(let i = 1; i < snake.length; i++) {
    if(snake[0].x === snake[i].x && snake[0].y === snake[i].y){
        clearInterval(jogo);
        alert('Fim de jogo!');
    }
}


function desenharjogo();

 criarcenario();
criarCobrinha();

if(snake[0].x > 15 * box && direction = 'right') snake [0].x = 0;
if(snake[0].x < 0 && direction = 'left') snake[0].x = 16 * box;
if(snake[0].y > * box && direction = 'down') snake [0].y 0;
if(snake[0].y < 0 && direction === 'up') snake[0].y = 16 * box;

if(snakeX !== comida,x || snakeY !== comida, y);{
//Remover o ultimo elemento da cauda da cobrinha
//Pop remove o ultimo elemento do vetor
//Impede da cobrimnha crescer
snake.pop()

}else

 //Cobrinha come a fruta,
       //cresce e cria uma nova fruta
       tamanhoSpan.textContent = ++tamanho;//Mostrando o tamanho atualizado


//Pegando as coordenadas x e y da cabeça da cobrinha





let snakex = snake[0],x;
let snakey = snake [0].y;

//Movimentar a cobrinha de acordo com a direção
if(direction === 'right') snakeX += box;//Somar para a direita
if(direction === 'left') snakeX = box;//Subtrair para a esquerda
if(directon === 'up') snakeY += box;//Subtrair para cima
if(direction =='down') snakeY += box;//Somar para baixo

//Remover o ultimo elemento da calda da cobrinha
//Pop remove o ultimo elemento do vetor
snake.pop();

//criação da nova apos o movimento
const newhead = {
    x: snakeX,
    y: snakeY
}

//Adicionar a nova cabeça apos o movimento
//Unshift adiciona um elemento no inicio do vetor

snake.unshift(newHead);

//A função desenhar Jogo está sendo chamada a cada 100ms
let jogo = setInterval(desenharJogo, 100);
