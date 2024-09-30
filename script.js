var nome = "Palmeiras";
let idade = 25;
const cidade = "São Paulo";

console.log("Nome é: ", nome);
console.log("Idade é: ", idade);
console.log("CIdade é: ", cidade);

const pessoa = {
    nome: "Joao",
    idade: 19,
    sexo: "Masculino",
    telefone: "(42)99999-9999"
}

console.log(pessoa);

let cachorro = {
    nome: 'caramelo',
    idade: 5,
    vacinado: false
}

cachorro.nome = "Banzé";
cachorro.vacinado = true;

console.log(cachorro);

// Concatenação de Strings
let nomeCompleto= "Joao";
let message = "Bem vindo " + nomeCompleto + " ao sistema";

console.log(message);

// Operações com numbers
let a = 25;
let b = 30;

let total = a + b;
console.log("O total é: ", total);

// Conversão para string

let turma = 1;
let turmaFormatado = String(turma);
console.log(turmaFormatado);    

// Conversão para number;
let telefone = "4299999999999"
let telefoneFormatado = Number(telefone);
console.log(telefoneFormatado);
