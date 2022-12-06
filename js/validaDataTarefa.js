let data = new Date(document.querySelector("#dataTarefa").val().replace(/-/g, '/'));

data.addEventListener("focusout", function(){
    validardataDeTarefa()
});


function validardataDeTarefa() {
    let data = new Date(document.querySelector("#dataTarefa").val().replace(/-/g, '/'));
    let dataAtual = new Date();
    dataAtual.setHours(0, 0, 0, 0);


    let mensagem = $('#alert-data');
    if (data >= dataAtual) {
        mensagem.text("Data válida");
        mensagem.removeClass("erro")
        mensagem.addClass("sucesso")

        return true;
    } else {
        mensagem.text("Data inválida");
        mensagem.removeClass("sucesso")
        mensagem.addClass("erro")

        return false;
    }
}