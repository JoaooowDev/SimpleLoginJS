var botao = document.querySelector('.validar');
botao.addEventListener('click', validacao);

function validacao() {
    let usuario = document.querySelector('.usuario');
    let senha = document.querySelector('.senha');

    if (usuario.value == '' || senha.value == '') {
        alert('Preencha todos os campos');
    } else if (usuario.value == 'admin' && senha.value == 'admin') {
        alert('Login efetuado com sucesso');
    } else {
        alert('Usuário ou senha incorretos');
    }
}