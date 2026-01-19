/* CABEÇALHO */

/* MENU HAMBÚRGUER */

const btnMobile = document.getElementById('btn-mobile');
const menuLista = document.getElementById('menu-lista')



btnMobile.addEventListener('click', function() {
    menuLista.classList.toggle('ativo');

    if(menuLista.classList.contains('ativo')) {
        btnMobile.innerText = 'X';
    } else {
        btnMobile.innerText = '☰';

    }
});

const listaDeLinks = document.querySelectorAll('#menu-lista a');

listaDeLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        menuLista.classList.remove('ativo');

        btnMobile.innerText = '☰'
    });
});




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

/* BOTÃO DESTAQUE E ESTOQUE */

const botaoComprar = document.getElementById('btn-comprar-hero');

let estoque = 5;

let textoOriginal = botaoComprar.innerText;

botaoComprar.addEventListener('click', function(event) {
    event.preventDefault();

    

    if(estoque > 0) {

        estoque--;

        botaoComprar.innerText = "ADICIONADO! Restam: "+estoque;
        botaoComprar.style.backgroundColor = "#11d811";
        botaoComprar.style.color = "#000"

        setTimeout(() => {

            if(estoque === 0) {
                botaoComprar.innerText = "ESGOTADO";
        
                botaoComprar.style.backgroundColor = "#f00";
                botaoComprar.style.color = "#fff";
            } else {
                botaoComprar.innerText = textoOriginal;
            
                botaoComprar.style.backgroundColor = "";
                botaoComprar.style.color = "";
            }
        }, 2000);
     } else {
        botaoComprar.innerText = "ESGOTADO";
        botaoComprar.style.backgroundColor = "#f00";
        botaoComprar.style.color = "#fff";

    

    }

    
    

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





