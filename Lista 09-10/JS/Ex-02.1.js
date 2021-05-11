// JavaScript source code
function Init()
{
    Media();
}

function Media()
{
    var BoolNota = true;

    while (BoolNota) {
        var Nota01 = prompt("Informe a primeira nota: ");
        var Nota02 = prompt("Informe a segunda nota: ");

        var media = (Nota01 * 0.4) + (Nota02 * 0.6);

        alert('A media final foi: ' + media);

        var Continuar = prompt("Deseja continuar(S/N)?: ");

        if (Continuar.toUpperCase() == 'N') {
            BoolNota = false;
        }
    }
}