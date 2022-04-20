function clicar(){
    alert("Você clicou no botão")
}

let nome = window.document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.getElementsByName('assunto')

function enviar(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Todos os campos devem ser preenchidos")
        return false
    }else{
        alert("Olá " + nome.value + "! Sua dúvida foi enviada com sucesso! Em breve retornaremos!")
        return true
    }
}
