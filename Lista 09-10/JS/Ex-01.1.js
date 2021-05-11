// JavaScript source code
function Init() {
    Soma();
}

function Soma() {
    var SomaPar = 0;
    var SomaImpar = 0;

    for (var i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            SomaPar += i;
        }
        else {
            SomaImpar += i;
        }
    }

    alert('Soma dos numeros pares entre 0 e 100: ' + SomaPar);
    alert('Soma dos numeros impares entre 0 e 100: ' + SomaImpar);
}