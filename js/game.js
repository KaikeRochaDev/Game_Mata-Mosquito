var altura = 0
var largura = 0
let vidas = 1
let tempo = 15
let criaMosquitoTempo = 2000
let nivel = window.location.search
nivel = nivel.replace("?", '')

if (nivel === 'facil'){
    //2000
    criaMosquitoTempo = 2000
} else if(nivel === 'normal'){
    //1500
    criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
    //1000
    criaMosquitoTempo = 1000
}

document.getElementById('cronometro').innerHTML = tempo

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

}

ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function (){
    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica(){
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        
        if(vidas <= 3) {
            document.getElementById('v' + vidas).src="../imgs/coracao_vazio.png"

        } else{
            window.location.href = 'fim_de_jogo.html'
        }

        vidas+= 1

    }

    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    let mosquito = document.createElement('img')
    mosquito.src = 'imgs/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)

}

let criaMosquito = setInterval(function() {
    posicaoRandomica()
}, criaMosquitoTempo)

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2: 
            return 'mosquito3'
    }       
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}