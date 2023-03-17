const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle, peca) {
    const pecaContador = controle.querySelector("[data-contador]")
    let valorAtual = parseInt(pecaContador.value)

    if (operacao === "-") {
        if (valorAtual > 0){
            pecaContador.value = valorAtual - 1;
            atualizaEstatistica(peca, "-");
        }       
    } else {
        pecaContador.value = valorAtual + 1;
        atualizaEstatistica(peca, "+");
    }
}

function atualizaEstatistica(peca, operacao) {
    estatisticas.forEach((elemento) => {
        let valor = pecas[peca][elemento.dataset.estatistica];
        if (operacao === "-"){
            valor = -valor;
        }
        elemento.textContent = parseInt(elemento.textContent) + valor;
    });
}


const listaCores = document.querySelectorAll('.cores li');
const robotron = document.querySelector(".robo");

for(let i = 0; i < listaCores.length; i++) {
    const cor = listaCores[i];
    const cores = cor.classList.value.split(' ')[1];

    cor.onclick = function() {
        robotron.setAttribute(`src`, `./img/${cores}/robotron.png`);
    }
}