//lista
let listaDeNumeroSorteados = [];
let numeroLimite = 10;

//armazenamentos
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//functions

//function mudar elementos em tela
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} )
};

//function mensagens inicias
function mensagensIniciais() {
    
exibirTextoNaTela('h1', 'Bem vindo ao jogo do numero secreto!🎰')
exibirTextoNaTela('p', 'selecione um numero de 1 á 10👩‍💻')
}

mensagensIniciais();

//function gerar numero secreto
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;
    console.log(listaDeNumeroSorteados)

    if(quantidadeDeElementosNaLista == numeroLimite){
      listaDeNumeroSorteados = [];
    }

    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();

    }else{
      listaDeNumeroSorteados.push(numeroEscolhido);
      return numeroEscolhido;
    }

}

//function para verificar o chute
function verificarChute(){
    let chute = document.querySelector('input').value      
   if(chute == numeroSecreto){
     exibirTextoNaTela('h1', 'Acertou!🎯');
     let mensagemTentativas = tentativas > 1? 'Tentativas' : 'Tentativa';
     exibirTextoNaTela('p', `Você descobriu o numero secreto em ${tentativas} ${mensagemTentativas}`);
     document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
     if(chute > numeroSecreto){
        exibirTextoNaTela('p', `o numero é menor que ${chute}`);

     }else{
        exibirTextoNaTela('p', `o numero secreto é maior ${chute}`);
     }


   }tentativas++
   limparCampo();
   
    
    
}

//funciotn limpar campo
function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}


//function reiniciar jogo
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagensIniciais(); 
    document.getElementById('reiniciar').setAttribute('disabled',
     true)

};


