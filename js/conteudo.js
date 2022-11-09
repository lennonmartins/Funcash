let conteudoForm1 = document.querySelector(".cadastro-1");
let conteudoForm2 = document.querySelector(".cadastro-2");
let conteudoForm3 = document.querySelector(".cadastro-3");
let campoNome = document.querySelector(".campoNome");
let campoData = document.querySelector(".campoData");
let campoAlertaNome = document.querySelector(".alerta__nome");
let campoAlertaData = document.querySelector(".alerta__data");
let botaoProximo = document.getElementById("botao__proximo");

botaoProximo.addEventListener("click", function () {
    if (  verificarNome() && verificarData()) {

        conteudoForm1.classList.add("invisivel");

        conteudoForm2.classList.remove("invisivel");
    }
})

function retornarSucesso(event) {
    event.preventDefault();
    conteudoForm2.classList.add("invisivel");

    conteudoForm3.classList.remove("invisivel");

}

function verificarNome() {
    let alerta = document.querySelector(".alerta__nome");
    if ((campoNome.value).trim() == "" || campoNome.value == null) {
        alerta.textContent = "Preencha um nome válido!"
        console.log("Não preencheu nome!");
        return false;
    } else {
        alerta.textContent = "Nome válido!"
        console.log("preencheu nome!");
        return true;
    }
}

function verificarData() {
    let alerta = document.querySelector(".alerta__data");
    if (campoData.value == "" || campoData.value == null) {
        alerta.textContent = "Preencha uma data válida!"
        console.log("Não preencheu data!");

        return false;
    } else {
        alerta.textContent = "Data válida!"
        return true;
    }
}

let botaoVoltar = document.getElementById("botao__voltar")

botaoVoltar.addEventListener("click", function () {
    conteudoForm1.classList.remove("invisivel");

    conteudoForm2.classList.add("invisivel");
})




