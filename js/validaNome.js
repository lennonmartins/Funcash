function verificarNome() {
    let alerta = document.querySelector(".alerta__nome");
    if ((campoNome.value).trim() == "" || campoNome.value == null) {
        alerta.textContent = "Preencha um nome válido!"
        alerta.classList.add("erro");
        console.log("Não preencheu nome!");
        return false;
    } else {
        alerta.textContent = "Nome válido!"
        alerta.classList.remove("erro");
        alerta.classList.add("sucesso");
        console.log("preencheu nome!");
        return true;
    }
}