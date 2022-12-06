
let conteudoForm_1 = document.querySelector(".cadastro-1");
let conteudoForm_2 = document.querySelector(".cadastro-2");
let campoCpf = document.querySelector(".campoCpf");
let botao = document.querySelector(".botaoConfirmar")
let botao_Proximo = document.querySelector(".botao__proximo");



botao_Proximo.addEventListener("click", function () {
    if (  verificarNome() && validaCpf() && verificarData() ) {

        conteudoForm_1.classList.add("invisivel");

        conteudoForm_2.classList.remove("invisivel");
        
    }
})


let botaoVoltar = document.getElementById("botao__voltar")

botaoVoltar.addEventListener("click", function () {
    conteudoForm_1.classList.remove("invisivel");

    conteudoForm_2.classList.add("invisivel");
})



function retornarSucesso(event) {
    event.preventDefault();
    if(!validarConfirmacaoEmail() && !validarConfirmacaoSenha() ){
        window.location.href = "./index.html";
    }
    }




