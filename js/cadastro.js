
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




