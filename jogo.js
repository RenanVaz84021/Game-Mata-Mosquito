var altura = 0
var largura = 0
var vidas = 1
var tempo = 30

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //1500 ms
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil'){
    //1000 ms
    criaMosquitoTempo = 1000
} else if (nivel === 'chuck'){
    //750 ms
    criaMosquitoTempo = 750
}

function ajustaTamanhoTelaJogo(){
    altura = window.innerHeight
    largura = window.innerWidth   

    console.log(largura, altura)
}

ajustaTamanhoTelaJogo()

var cronometro = setInterval(function() {
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else {
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {
    // remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){ // testa se o elemento já exsite
        document.getElementById('mosquito').remove()

        if (vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        } else {
        document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

        vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura - 90) // posicionamento aleatorio no eixo X de acordo com a dimensão 
    var posicaoY = Math.floor(Math.random() * altura - 90) // posicionamento aleatorio no eixo Y de acordo com a dimensão 

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

   /*  Criando o elemento HTML  */
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px' // posicionando o elemento no eixo X de forma randomica
    mosquito.style.top = posicaoY + 'px' // posicionando o elemento no eixo Y de forma randomica
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    mosquito.onclick = function(){
        this.remove() //remove o elemento no momento do clique
    }

    document.body.appendChild(mosquito) // adicionando o elemento no HTML (Body)

    console.log(ladoAleatorio())
}

 /* Mudando o tamanho do elemento (mosquito) de forma aleatoria na tela  */
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
  
    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

/* Mudado a direção que o mosquito está virado */
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
  
    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}