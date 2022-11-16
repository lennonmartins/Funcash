let conteudoForm1 = document.querySelector(".cadastro_1");
let conteudoForm2 = document.querySelector(".cadastro_2");
let conteudoForm3 = document.querySelector(".cadastro_3");


let botaoProximo = document.getElementById("botao__proximo");


let botaoVoltar = document.getElementById("botao__voltar")

botaoVoltar.addEventListener("click", function () {
    conteudoForm1.classList.remove("invisivel");

    conteudoForm2.classList.add("invisivel");
})

botaoProximo.addEventListener("click", function () {
    if (  verificarNome()  && verificarData() ) {

        conteudoForm1.classList.add("invisivel");

        conteudoForm2.classList.remove("invisivel");
        
    }
})


function retornarSucesso(event) {
    event.preventDefault();
    if(!validarConfirmacaoEmail() ){
        conteudoForm2.classList.add("invisivel");
    
        conteudoForm3.classList.remove("invisivel");
    }
    }





