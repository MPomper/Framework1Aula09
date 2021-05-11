// JavaScript source code

function CalculoBoleto(ValorElement, DiasVencidosElement)
{
    var Juros = 0;
    var Total = 0;

    var Valor = document.getElementById(ValorElement);
    var DiasVencidos = document.getElementById(DiasVencidosElement);

    Valor = parseFloat(Valor.value);
    DiasVencidos = parseInt(DiasVencidos.value);

    if (DiasVencidos <= 3) {
        alert('Isento de multa/juros. Valor do boleto: ' + Valor);
        return;
    }
    else if (DiasVencidos <= 15) {
        Juros = Valor * 0.10;
    }
    else if (DiasVencidos > 15) {
        Juros = Valor * 0.15;
    }

    Total = Valor + Juros;
    console.log(Total);

    alert('Valor do boleto vencido ha ' + DiasVencidos + ' e de R$' + Total + ' / Juros R$' + Juros);
}