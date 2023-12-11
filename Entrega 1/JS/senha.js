const usuarios = [
    { email: 'adailton_cerqueira@gmail.com', senha: 'senha1' },
    { email: 'marcosribeiro@gmail.com', senha: 'senha2' },
    { email: 'victorpio@gmail.com', senha: 'senha3' },
    { email: 'eduardolima@gmail.com', senha: 'senha4' },
    
];

var botao = window.document.getElementById('botao_logar')
botao.addEventListener('click',verificar)


function verificar(){
    var email_digitado = window.document.getElementById('email_input').value
    var senha_digitado = window.document.getElementById('senha_input').value

    const usuarioValido = usuarios.find(usuarios => usuarios.email === email_digitado && usuarios.senha === senha_digitado);

    
    if (usuarioValido){
        alert('Login bem sucedido')
        window.location.href = 'index.html'
    }
    else{
        alert('Email ou senha Incorretos , Por favor verifique' )
        
    }
}