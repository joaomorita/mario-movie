console.log('mostrar o document', document);
const video = document.getElementById("video");
const linkDoVideo = video.src;
//Passo 1 - Pegar o elemento que representa o botão na tela usando o JS

const botaoTrailer = document.querySelector(".botao-trailer");

//Passo 2 - Identificar quando o usuário clicar no botão

botaoTrailer.addEventListener("click", () => {
    // Passo 4 - Abrir a modal na tela.
    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo)
})


// Passo 3 - Pegar o elemento da modal no JS

const modal = document.querySelector(".modal");

// Objetivo 2 - Quando clicar no "X", devemos fechar a modal.

// Passo 1 - Pegar o elemento de fechar a modal usando JS

const fecharModal = document.querySelector(".fechar-modal");

// Passo 2 - Identificar quando o usuário clicar no X 

fecharModal.addEventListener("click", () => {
    // Passo 3 - Fechar a modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});