let listadeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMinhasBolas(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate : 1.2});
}

function exibirMengsagemInicial() {
    exibirMinhasBolas('h1', 'joguo');
    exibirMinhasBolas('p', 'escoia um numero de 1 a 10');
}

exibirMengsagemInicial();

exibirMinhasBolas('h1', 'joguo');
exibirMinhasBolas('p', 'escoia um numero de 1 a 10');

function verificarChute() {
        let chute = document.querySelector('input').value;

        if (chute == numeroSecreto) {
            exibirMinhasBolas('h1', 'Burro mas acertou');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `voce descobriu o numero com ${tentativas} ${palavraTentativa}`;
            exibirMinhasBolas('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute
            ('disabled')
        } else {
            if (chute > numeroSecreto) {
                exibirMinhasBolas('p', 'o numero e menor burro');
            } else {
                exibirMinhasBolas('p', 'o numero e maior burro');
            }
            //tentativas = tentativas + 1 mema bosta que o ++ os dois e soma
            tentativas++;
            limparCampo();
        }
}       

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMengsagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled' ,true);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listadeNumerosSorteados.length;


    if (quantidadeDeElementosNaLista == numeroLimite) {
        listadeNumerosSorteados = [];
    }

    if (listadeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }   else {
        listadeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
}


