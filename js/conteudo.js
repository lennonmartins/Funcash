let conteudoForm1 = document.querySelector(".cadastro-1");
let conteudoForm2 = document.querySelector(".cadastro-2");

let botaoProximo = document.getElementById("botao__proximo")

botaoProximo.addEventListener("click", function () {

    conteudoForm1.classList.add("invisivel");

    conteudoForm2.classList.remove("invisivel");

})

let botaoVoltar = document.getElementById("botao__voltar")

botaoVoltar.addEventListener("click", function(){
    conteudoForm1.classList.remove("invisivel");

    conteudoForm2.classList.add("invisivel");
})







    // if (this.value.length > 0) {
    //     for (let i = 0; i < pacientes.length; i++) {
    //         var paciente = pacientes[i];
    //         var tdNome = paciente.querySelector(".info-nome");
    //         nome = tdNome.textContent;
    //         var expressao = new RegExp(this.value, "i");
    //         if (!expressao.test(nome)) {
    //             paciente.classList.add("invisivel");
    //         } else {
    //             paciente.classList.remove("invisivel");
    //         }

    //     }
    // } else {
    //     for (let i = 0; i < pacientes.length; i++) {
    //         var paciente = pacientes[i];
    //         paciente.classList.remove("invisivel");
    //     }
    // }
