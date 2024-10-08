function calculadora(a, b, operacao) {
    if (operacao === 'soma') {
        return a + b;
    }
    if (operacao === 'subtracao') {
        return a - b;
    }
    if (operacao === 'multiplpicacao') {
        return a * b;
    }
    if (operacao === 'divisao') {
        return a / b;
    }
    return 'Operação invalida';
}

console.log(calculadora(10, 5, 'soma'));
console.log(calculadora(10, 5, 'subtracao'));
console.log(calculadora(10, 5, 'multiplicacao'));
console.log(calculadora(10, 5, 'divisao'))