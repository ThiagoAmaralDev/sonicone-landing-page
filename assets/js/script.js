/* ------------------------------ INICIO CABEÇALHO ---------*/

/* NAVBAR TRANSPARENTE E FIXA */


const header = document.getElementById('cabecalho');
const levarTopo = document.getElementById('btn-topo');

window.addEventListener('scroll', function() {

    if(window.scrollY > 80) {
        header.classList.add('rolagem');
    } else {
        header.classList.remove('rolagem');
    }

    if(window.scrollY > 500) {
        levarTopo.classList.add('visivel');
    } else {
        levarTopo.classList.remove('visivel');
    }
});


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

/* BOTÃO COMPRAR */

const contadorElemento = document.getElementById("contagem-carrinho");
const botoesComprar = document.querySelectorAll(".botao-destaque");

let contagemAtual = localStorage.getItem("qtdCarrinho");

if(contagemAtual === null) {
    contagemAtual = 0;
} else {
    contagemAtual = parseInt(contagemAtual);
}

contadorElemento.innerText = contagemAtual;

botoesComprar.forEach(function(botao) {

    botao.addEventListener("click", function(event) {
        event.preventDefault();

        if(contagemAtual == 10) {
            alert("Limite de 10 unidades por cliente atingido!");

            botao.style.backgroundColor = "red";
            botao.innerText = "LIMITE!";
            setTimeout(() => {
                botao.style.backgroundColor = "";
                botao.innerText = textoOriginal;
            }, 1000);
        } else {
            contagemAtual++;
            contadorElemento.innerText = contagemAtual;
            localStorage.setItem("qtdCarrinho", contagemAtual);

            botao.style.backgroundColor = "#11d811";
            botao.style.color = "#000"; 
            botao.innerText = "ADICIONADO!";

            setTimeout(() => {
                botao.style.backgroundColor = ""; 
                botao.style.color = ""; 
                botao.innerText = textoOriginal; 
            }, 2000);

        }
    
    });


});


/* -------FIM CABEÇALHO --------- */


/*------------------ INÍCIO CONTAINER BENEFÍCIOS --------------*/

/* SCROLL nos cards */

    window.addEventListener('scroll',revelar); 
    
    function revelar() {
        let reveals = document.querySelectorAll('.card');

        for(let i = 0 ; i < reveals.length ; i++) {
            let windowHeight = window.innerHeight;

            let elementTop = reveals[i].getBoundingClientRect().top;

            let elementVisible = 150;

            if(elementTop < windowHeight - elementVisible) {
                reveals[i].style.transitionDelay = (i * 0.2) + 's';
                reveals[i].classList.add('aparecer');
            } else {
                reveals[i].classList.remove('aparecer');
            }
        }
    }

    /* FAQ */

    const acc = document.getElementsByClassName("accordion");

    for(let i = 0 ; i < acc.length ; i++) {

        acc[i].addEventListener("click", function() {

            for(j = 0 ; j < acc.length ; j++) {
                if(acc[j] !== this && acc[j].classList.contains("active")) {
                    acc[j].classList.remove("active");

                    acc[j].nextElementSibling.style.maxHeight = null;
                }
            }

            this.classList.toggle("active");

            let painel = this.nextElementSibling;

            if(painel.style.maxHeight) {
                painel.style.maxHeight = null;
            } else {
                painel.style.maxHeight = painel.scrollHeight + "px";
            }
        });
    }


/*------------------ FIM CONTAINER BENEFÍCIOS --------------*/





/* ------------------- INÍCIO HERO  --------------*/

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



/* FORMULÁRIO */

const emailInput = document.getElementById('campo-email');
const msgErro = document.getElementById('msg-email');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener('input', function() {

    let valorDigitado = emailInput.value;

    if(emailRegex.test(valorDigitado) && !valorDigitado.includes("@yahoo.com")) {
        emailInput.style.border = "2px solid limegreen";
        msgErro.style.display = "none";
    } else {
        emailInput.style.border = "2px solid red";
        msgErro.style.display = "block";

        if(valorDigitado.includes("@yahoo.com")) {
            msgErro.innerText = "Não aceitamos Yahoo!";
        } else {
            msgErro.innerText = "E-mail inválido";
        }


    }

    if(valorDigitado === "") {
        emailInput.style.border = "2px solid #333";
        msgErro.style.display = "none";
    }
});

/* ------------------- FIM HERO  --------------*/




/*------------------ INÍCIO FOOTER --------------*/

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

/*------------------ FIM FOOTER --------------*/





