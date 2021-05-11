// JavaScript source code
function CalculoSegundoGrau(a, b, c) {

    var A = document.getElementById(a);
    var B = document.getElementById(b);
    var C = document.getElementById(c);
    var Delta = 0;
    var x1 = 0;
    var x2 = 0;

    A = parseFloat(A.value);
    B = parseFloat(B.value);
    C = parseFloat(C.value);

    Delta = parseFloat(Math.pow(B, 2) - 4 * A * C);

    if (A == 0) {
        alert('O valor de A nao pode ser 0!');
        return;
    }
    else if (Delta == 0) {
        alert('Sem Raiz!');
        return;
    }

    x1 = parseFloat(-B + Math.sqrt(Delta) / (2 * A));
    x2 = parseFloat(-B - Math.sqrt(Delta) / (2 * A));

    console.log(Math.sqrt(9));
    console.log(Math.sqrt(Delta));
    
    alert('O valor de Delta �: ' + Delta + ' / X-1:' + x1 + ' / X-2:' + x2);
}