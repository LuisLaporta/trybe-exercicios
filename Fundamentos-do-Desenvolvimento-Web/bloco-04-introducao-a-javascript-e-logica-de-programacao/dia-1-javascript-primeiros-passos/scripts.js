//              exercício 1
//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.

const a = 9
const b = 5

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

//              exercício 2
//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const l = 9
const s = 5

if (l > s) {
    console.log("'l' maior que 's'");
} else {
    console.log("'s' maior que 'l'");
}

//              exercício 3
//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const x = 9
const y = 5
const z = 3

if (x > y && x > z) {
    console.log("'x' maior que 'y' e 'z'");
} else if (y > x && y > z) {
    console.log("'y' maior que 'x' e 'z'");
} else {
    console.log("'z' maior que 'x' e 'y'");
}

//              exercício 4
//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const number = 0

if (number > 0) {
    console.log("positive");
} else if (number <= -1) {
    console.log("negative");
} else (
    console.log(0)
)

//              exercício 5
//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo1 = 60
const angulo2 = 60
const angulo3 = 60

if (angulo1 + angulo2 + angulo3 == 180) {
    console.log(true);
} else {
    console.log(false);
}

//              exercício 6
//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

const pecaXadrez = 'bispo';

switch (pecaXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei: Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo: Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha: Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo: "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre: Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão: Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

//              exercício 7
//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let nota = 101

if (nota >= 90 && nota < 100) {
    console.log("A");
} else if (nota >= 80 && nota < 90) {
    console.log("B");
} else if (nota >= 70 && nota < 80) {
    console.log("C");
} else if (nota >= 60 && nota < 70) {
    console.log("D");
} else if (nota >= 50 && nota < 60) {
    console.log("E");
} else if (nota < 50) {
    console.log("F");
} else {
    console.log("Erro");
}

//              exercício 8
//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

const number1 = 9
const number2 = 8
const number3 = 5

if (number1 % 2 || number2 % 2 || number3 % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}

//              exercício 9
//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

const number4 = 9
const number5 = 8
const number6 = 5

if (number4 % 2 || number5 % 2 || number6 % 2 == 1) {
    console.log(true);
} else {
    console.log(false);
}

//              exercício 10
//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const valorCusto = 9;
const valorVenda = 18;

if (valorCusto >= 0 && valorVenda >= 0) {
    const valorCustoTotal = valorCusto * 1.8;
    const lucro = (valorVenda - valorCustoTotal) * 1000;
    console.log(lucro)
} else {
    console.log("Erros, os valores não podem ser negativos")
}

//              exercício 11
//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let inss;
let ir;

let salarioBruto = 3000.00;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
} else {
    inss = 570.88;
}

let salarioBasico = salarioBruto - inss;

if (salarioBasico <= 1903.98) {
    ir = 0;
} else if (salarioBasico <= 2826.65) {
    ir = (salarioBasico * 0.075) - 142.80;
} else if (salarioBasico <= 3751.05) {
    ir = (salarioBasico * 0.15) - 354.80;
} else if (salarioBasico <= 4664.68) {
    ir = (salarioBasico * 0.225) - 636.13;
} else {
    ir = (salarioBasico * 0.275) - 869.36;
}

console.log("Salário Líquido: " + (salarioBasico - ir));

