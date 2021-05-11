// JavaScript source code
function Init() {
    Numeros();
}

function Numeros()
{
    var NumMaior = '';
    var NumMenor = '';
    var NumTotal = '';
    var NumMedia = '';
    var AlertText = '';
    var Aux = 0;
    var NumArray = new Array();

    for (var i = 0; i < 10; i++) {
        Aux = prompt("Digite o " + (i + 1) + " numero: ");
        NumArray.push(Aux);
    }

    for (var i = 0; i < NumArray.length; i++) {
        if (NumMaior == '') {
            NumMaior = NumArray[i];
        }
        else if (NumMaior < NumArray[i]) {
            NumMaior = NumArray[i];
        }

        if (NumMenor == '') {
            NumMenor = NumArray[i];
        }
        else if (NumMenor > NumArray[i]) {
            NumMenor = NumArray[i];
        }

        NumTotal += NumArray[i];
    }

    NumMedia = NumTotal / NumArray.length;

    NumArray.sort();

    for (var i = 0; i < NumArray.length; i++) {
        AlertText = (AlertText + (i + 1) + "� Numero: ", NumArray[i]);
    }

    console.log('Maior numero: ' + NumMaior);
    console.log('Menor numero: ' + NumMenor);
    console.log('Media numero: ' + NumMedia);

    alert(NumArray.toString());
}