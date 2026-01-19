

/* HERO */

/* SELETOR DE CORES */

const imagemVisualizacao = document.getElementById('imagem-fone');
const tituloVisualizacao = document.getElementById('titulo-produto');

const botaoAzul = document.getElementById('btn-azul');
const botaoBranco = document.getElementById('btn-branco');
const botaoPreto = document.getElementById('btn-preto');

function trocarImagem(caminho, nomeDaCor) {
    imagemVisualizacao.src = caminho;
    tituloVisualizacao.innerHTML = "Mergulhe no Silêncio - " + nomeDaCor;;
}

botaoAzul.addEventListener('click', function() {

    trocarImagem('assets/img/fone/sonicone-azul.jpg', 'SonicOne Azul')
});

botaoBranco.addEventListener('click', function() {

    trocarImagem('assets/img/fone/sonicone-branco.jpg', 'SonicOne Branco')
});

botaoPreto.addEventListener('click', function() {

    trocarImagem('assets/img/fone/sonicone-preto.jpg', 'SonicOne Preto')
});

/* BOTÃO DESTAQUE */

const botaoComprar = document.getElementById('btn-comprar-hero');

botaoComprar.addEventListener('click', function(event) {
    event.preventDefault();

    let textoOriginal = botaoComprar.innerText;
    
    botaoComprar.innerText = "ADICIONADO! ✔";
    
    botaoComprar.style.backgroundColor = "#11d811";
    botaoComprar.style.color = "#000";
    
    setTimeout(() => {
        botaoComprar.innerText = textoOriginal;
    
        botaoComprar.style.backgroundColor = "";
        botaoComprar.style.color = "";
    }, 2000);



});


/* FOOTER */

// MUDANÇA AUTOMÁTICA DO ANO 

const elementoCopyright = document.getElementById("texto-copyright");

const dataAtual = new Date();
const anoLancamento = 2026;
const anoAtual = dataAtual.getFullYear();


if(anoAtual > anoLancamento) {
   elementoCopyright.innerHTML = `&copy ${anoLancamento} - ${anoAtual} Sonic Audio. Feito por Thiago Amaral.`;
} else {
    elementoCopyright.innerHTML = `&copy ${anoAtual} Sonic Audio. Feito por Thiago Amaral.`;
}





