/*
OBJETIVO 1 - quando clicarmos na seta de avancar temos que motrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
    - passo 2 - dar um jeito de indentificar o clique do usuário na seta avancar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que esta selecionado esconder

    OBJETIVO 2 - quando clicarmos na seta de voltar temos que motrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    - passo 2 - dar um jeito de indentificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que esta selecionado esconder

    */
   
    /*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que motrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - passo 2 - dar um jeito de indentificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que esta selecionado esconder */
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSElecionado(){
    const cartaSelecionado = document.querySelector(".selecionado");
   cartaSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function(){
    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSElecionado();    

    cartaoAtual++;
    mostrarCartao(cartaoAtual);

});

btnVoltar.addEventListener("click", function(){
    if(cartaoAtual === 0) return;

    esconderCartaoSElecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);

});