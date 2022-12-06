let campoEmail = document.querySelector("#email");
let campoSenha = document.querySelector("#senha");
let botaoAcessar = document.querySelector("#botao__login");
let campoErro = document.querySelector("#erroSenha")


function validarLogin(){
    if (campoEmail.value == "teste@insted.com.br" && campoSenha.value == "123456"){
        
        return true;
    } else{
        campoErro.classList.add("erroSenha");
        campoErro.textContent = "Login/senha incorreto!"
        return false;
    }
}


function retornarSucesso(event) {
    event.preventDefault();
    if(validarLogin()){
        window.location.href = "./menu.html";
    }else{
        console.log("erro404");
    }
    }
