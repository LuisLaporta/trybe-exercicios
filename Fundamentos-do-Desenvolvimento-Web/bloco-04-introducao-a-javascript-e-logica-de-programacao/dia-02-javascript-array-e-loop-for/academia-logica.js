// 1. Encontre o index através do valor de um elemento

// Escreva uma algoritmo que recebe 2 parâmetros:
// - Um array
// - O valor de um elemento de tipo primitivo

// Imprima no terminal a posição index em que o elemento encontra-se.

// Caso não o encontre, imprima:
// -----------------------------------
// "Elemento não encontrado no array"
// -----------------------------------

let array = [1,3,5,7,9];
let elemento = 9;

if(array.includes(elemento)) {
    console.log(array.indexOf(elemento));
} else {
    console.log("Elemento não encontrado")
}



// 2. Retorne os números ímpares

// A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

// Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

// Use a seguinte estrutura na impressão:
// ----------------
// "x, y, z, ...n"
// ----------------

let numeros = [];

for (let index = 1; index <= 50; index += 1) {
    if (index % 2 === 1) {
        numeros.push(index)
    }
}

console.log(numeros);



// 3. Números divisíveis por 3

// Escreva um algoritmo que cria uma sequência numérica de inteiros de razão 1, o algoritmo deve receber antes de
//  criar o valor inicial e final.

// Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:

// Se houver 50 ou mais:
// ---------------------------------------
// "Há 50 ou mais números diviseis por 3"
// ---------------------------------------

// Caso o contrário:
// --------------------------
// "Sequência muito pequena."
// --------------------------


var ini = 10;
var final = 200;
var razao = 1;
var numbers = [];

for (let index = ini; index < final; index += razao) {
    if (index % 3 == 0) {
        numbers.push(index)
    }
}

console.log(numbers)

if (numbers.length > 50) {
    console.log("Há 50 ou mais números diviseis por 3")
} else {
    console.log("Sequência muito pequena.")
}