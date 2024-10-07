// Função simples Declarativa)
function saudacao() {
    return console.log("Olá Mundo");
}

// Função com parametros
function soam(valorA, valorB) {
    const totalSoma = valorA + valorB;
    return console.log(totalSoma);
}

// Função anônima
const multiplicar = function (valorA, valorB) {
    const total = valorA * valorB;
    return console.log(total);
}

//  Arrow function
const dividir = (a, b) => a / b;

// Função com valor padrão de paramemtro
function exponencial(base, expoente = 2) {
    const exp = base ** expoente;
    return console.log(exp);
}

// Invocar as funções
saudacao();
soam(10, 5);
multiplicar(3, 6);
exponencial(3);
exponencial(3, 3);

console.log(dividir(10, 2));

// Função de callback
function inicializaraplicacao() {
    saudacao();
soam(10, 5);
multiplicar(3, 6);
exponencial(3);
exponencial(3, 3);

console.log(dividir(10, 2));
}

inicializaraplicacao();