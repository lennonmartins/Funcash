campoEmail = document.querySelector("#email");
campoSenha = document.querySelector("#senha");
botaoAcessar = document.querySelector("#botao__login");


function validarLogin(){
    if (campoEmail.value == "teste@insted.com.br" && campoSenha.value == "123456"){
        console.log("entei");
        return true;
    } else{
        console.log(" n entei");
        return false;
    }
}


function retornarSucesso(event) {
    event.preventDefault();
    if(validarLogin()){
        window.location.href = "../menu.html";
    }else{
        console.log("erro404");
    }
    }
