let campoData = document.querySelector(".campoData");
let campoAlertaData = document.querySelector(".alerta__data");

function verificarData() {
    let alerta = document.querySelector(".alerta__data");
    if (campoData.value == "" || campoData.value == null) {
        alerta.classList.add("erro");
        alerta.textContent = "Preencha uma data válida!"
        console.log("Não preencheu data!");
        return false;
    } else {
        alerta.classList.remove("erro");
        alerta.classList.add("sucesso");
        alerta.textContent = "Data válida!"
        return true;
    }
}