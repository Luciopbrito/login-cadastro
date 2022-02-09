'use strict'

let input_email = document.getElementById('femail');
let input_senha = document.getElementById('fpassword');

// Dados do usuario
let email = 'lucio@gmail.com';
let senha = '1234'

function acessar() {
    if (input_email.value == '') {
        alert('[ERRO] E-mail inválido');
        input_email.focus();
    } else if (input_senha.value == '') {
        alert('[ERRO] Senha inválida');
        input_senha.focus();
    } else if (input_email.value !== email || input_senha.value !== senha) {
        alert('[ERRO] E-mail ou Senha inválido');
        window.location.href = 'index.html';
    } else if (input_email.value == email && input_senha.value == senha) {
        let form = document.getElementsByTagName('form')[0];
        form.action = 'home.html';
    }
}