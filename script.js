const avanca = document.querySelectorAll('.btn-proximo');
const btnIniciar = document.getElementById('btn-iniciar');

const startButton = document.getElementById('start-music');
const stopButton = document.getElementById('stop-music');
const battleMusic = document.getElementById('battle-music');
let nomeJogador = ''; // Variável para armazenar o nome do jogador


// Captura o clique no botão de iniciar
btnIniciar.addEventListener('click', function() {
    const inputNome = document.getElementById('nome-jogador');
    nomeJogador = inputNome.value.trim(); // Armazena o nome do jogador removendo espaços em branco
    
    if (nomeJogador) {
        // Se o nome foi preenchido, esconde a tela de entrada e mostra a primeira etapa da jornada
        document.getElementById('entrada-nome').style.display = 'none';
        document.getElementById('passo-0').classList.add('ativo');
        document.querySelector('.passo.ativo p').innerText = `Ótimo, ${nomeJogador}`;
    } else {
        alert('Por favor, insira seu nome para começar.');
    }
    
});

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});



// Função para tocar a música
function startMusic() {
    battleMusic.play();
}

// Função para parar a música
function stopMusic() {
    battleMusic.pause();
    battleMusic.currentTime = 0; // Reinicia a música
}

// Adiciona ouvintes de evento aos botões
startButton.addEventListener('click', startMusic);
stopButton.addEventListener('click', stopMusic);