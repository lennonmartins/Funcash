
let campoCpf = document.querySelector(".campoCpf");
let botao = document.querySelector(".botaoConfirmar")


botaoProximo.addEventListener("click", function () {
    if (  verificarNome() && verificarCpf() && verificarData() ) {

        conteudoForm1.classList.add("invisivel");

        conteudoForm2.classList.remove("invisivel");
    }
})

function verificarCpf() {
    let alerta = document.querySelector(".alerta__cpf");
    if ((campoCpf.value).trim() == "" || campoCpf.value == null) {
        alerta.textContent = "Preencha um cpf válido!"
        console.log("Não preencheu cpf!");
        return false;
    } else {
        alerta.textContent = "CPF válido!"
        console.log("preencheu nome!");
        return true;
    }
}


