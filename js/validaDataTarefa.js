let botaoConfirmar = document.querySelector("#botaoConfirmar");
let conteudo = document.querySelector(".cadastro-1");
let conteudo2 = document.querySelector(".cadastro_3");




function retornarSucesso(event) {
    event.preventDefault();
        console.log("Entrei");
        conteudo.classList.add("invisivel");
        conteudo2.classList.remove("invisivel");
    
}


// let data = new Date(document.querySelector("#dataTarefa").val().replace(/-/g, '/'));

// data.addEventListener("focusout", function () {
//     validardataDeTarefa()
// });


// function validardataDeTarefa() {
//     let data = new Date(document.querySelector("#dataTarefa").val().replace(/-/g, '/'));
//     let dataAtual = new Date();
//     dataAtual.setHours(0, 0, 0, 0);


//     let mensagem = $('#alert-data');
//     if (data >= dataAtual) {
//         mensagem.text("Data válida");
//         mensagem.removeClass("erro")
//         mensagem.addClass("sucesso")

//         return true;
//     } else {
//         mensagem.text("Data inválida");
//         mensagem.removeClass("sucesso")
//         mensagem.addClass("erro")

//         return false;
//     }
// }