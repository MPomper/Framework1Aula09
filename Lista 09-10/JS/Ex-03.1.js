// JavaScript source code
function Init()
{
    var ValorCompra = prompt("Digite o valor da compra: ");

    alert("O valor do desconto foi de: " + Descontar(ValorCompra));
}

function Descontar(ValorCompra)
{
    var Desconto = 0;

    ValorCompra = parseFloat(ValorCompra.replace(/,/g, '.'));

    if (ValorCompra >= 0.01 && ValorCompra <= 199.99) {
        Desconto = ValorCompra * 0.05;
    }
    else if (ValorCompra >= 200.00 && ValorCompra <= 499.99) {
        Desconto = ValorCompra * 0.08;
    }
    else if (ValorCompra >= 500.00) {
        Desconto = ValorCompra * 0.10;
    }

    return Desconto;
}

/*
function CalcularDesconto(ValorCompra) {
    var Valor = [0, 200, 500];
    var Desconto = [5, 8, 10];

    for (var i = 0; i < 3; i++) {
        if (ValorCompra >= ValorCompra[i]) {
            Desc = ValorCompra * (Desconto / 100);
            Total = ValorCompra - Desc;
        }
    }

    return Desconto, Total;
}*/