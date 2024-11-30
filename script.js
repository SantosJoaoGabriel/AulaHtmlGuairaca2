let = idade = prompt("Informe sua idade");

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Menor de idade");
}


function Numero(x) {
    if (x % 2 === 0) {
        return "Par"
    } else {
        return "Impar"
    }
}


let numero = prompt("Informe um numero");

if (numero > 0) {
    console.log("Positivo")
} else if ( numero < 0) {
    console.log("Negativo")
} else {
    console.log("Zero")
}

function tabuada(x) {

    for (i = 0; i <= 10; i++)
        console.log(`${x} x ${i} = ${x * i}`);
}

let Num_tab = prompt("Informe um numero a ser multiplicado");
tabuada(Num_tab);



// calculadoura
function calculadora(a, b, operacao) {

    if (operacao === 'soma') {
        return a + b;
    }
    if (operacao === 'subtracao') {
        return a - b;
    }
    if (operacao === 'multiplicacao') {
        return a * b;
    }
    if (operacao === 'divisao') {
        return a / b;
    }  
    return "Operação invalida";
}

console.log(calculadora(10, 5, 'soma'));
console.log(calculadora(10, 5, 'subtracao'));
console.log(calculadora(10, 5, 'multilicacao'));
console.log(calculadora(10, 5, 'divisao'));