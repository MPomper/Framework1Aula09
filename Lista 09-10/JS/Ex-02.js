// JavaScript source code

var Login = new Array();
var Password = new Array();

function Init()
{
    Login[0] = 'JOAO';
    Login[1] = 'PAULO';
    Login[2] = 'MARIA';

    Password[0] = '123456';
    Password[1] = 'A1B2C3';
    Password[2] = '676767';
}

function ValidarLogin(login, password)
{
    var validador = false;

    login = document.getElementById(login);
    password = document.getElementById(password);

    for (var i = 0; i < Login.length; i++)
    {
        if (Login[i] == login.value && Password[i] == password.value)
        {
            validador = true;
            break;
        }
    }

    if (validador)
    {
        alert('Usuário e senha validado. Bem vindo a aplicação');
    }
    else
    {
        alert('Usuário e senha Inválidos.');
    }
}