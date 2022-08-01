var carta1 = {
    nome: "Homem de Ferro",
    imagem: "https://i.pinimg.com/originals/20/dc/e7/20dce7485cfafb97dfbae0db1e2ebf20.jpg",
    atributos: {
        ataque: 80,
        defesa: 75,
        magia: 00
    }
}

var carta2 = {
    nome: "Capitão América",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/06/Captain-America.jpg",
    atributos: {
        ataque: 90,
        defesa: 75,
        magia: 20
    }
}

var carta3 = {
    nome: "Thor",
    imagem: "http://pm1.narvii.com/6853/1681520351d03d9d32d2dce8cf98e7a08df33b11v2_00.jpg",
    atributos: {
        ataque: 92,
        defesa: 65,
        magia: 90
    }
}

var carta4 = {
    nome: "Homem Aranha",
    imagem: "https://radiogeekbr.com.br/wp-content/uploads/2019/08/spider_man_as_iron_spider_4k-3840x2160.jpg",
    atributos: {
        ataque: 79,
        defesa: 40,
        magia: 05
    }
}

var carta5 = {
    nome: "Pantera Negra",
    imagem: "https://miro.medium.com/max/630/1*Iq0AUvbtDYMsEGsdJmUbPA.jpeg",
    atributos:{
        ataque: 89,
        defesa: 70,
        magia: 20
    }
}

var carta6 = {
    nome: "Hulk",
    imagem: "https://www.einerd.com.br/wp-content/uploads/2020/11/Hulk-capa.jpg",
    atributos: {
        ataque: 95,
        defesa: 86,
        magia: 15
    }
}

var carta7 = {
    nome: "Viúva Negra",
    imagem: "https://i.pinimg.com/originals/07/07/e9/0707e94b01189692f45a92a8bc3294e4.jpg",
    atributos: {
        ataque: 80,
        defesa: 75,
        magia: 0
    }
}

var carta8 = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 40
    }
}

var carta9 = {
    nome: "Thanos",
    imagem: "https://static.wikia.nocookie.net/universocinematograficomarvel/images/5/52/Empire_March_Cover_IW_6_Textless.png/revision/latest?cb=20190503112943&path-prefix=pt",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 50
    }
}

var carta10 = {
    nome: "Loki",
    imagem: "https://static.wikia.nocookie.net/universocinematograficomarvel/images/5/52/Empire_March_Cover_IW_6_Textless.png/revision/latest?cb=20190503112943&path-prefix=pt",
    atributos: {
        ataque: 60,
        defesa:80,
        magia: 100
    }
}

var cartaTrunfo = [carta9, carta10]
var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8]
//            0           1           2          3         4            5            6           7     
 
var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeCarta()

function atualizaQuantidadeCarta() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina +  " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if(cartas.length == 0 ){
        alert("Fim de Jogo")
        if(pontosJogador>pontosMaquina){
            htmlResultado = '<p class="resultado-final">Venceu</p>'
        }else if(pontosMaquina>pontosJogador) {
            htmlResultado = '<p class="resultado-final">Perdeu</p>' 
        }
    }else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeCarta()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class= "carta"></div> <div id= "carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}