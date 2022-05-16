
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

console.log(numbers);


// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let resultadoSoma = 0;

for (let index =0; index < numbers.length; index += 1) {
    resultadoSoma += numbers[index];
}

console.log(resultadoSoma);


// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let medidaAritmetica = resultadoSoma / numbers.length;

console.log(medidaAritmetica);


// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (medidaAritmetica > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}


// 5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorValor = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    }
}

console.log(maiorValor);


// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impares = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        impares += 1;
    }
}

if (impares === 0) {
    console.log('nenhum valor ímpar encontrado');
  } else {
    console.log(impares);
}


// 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorValor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorValor) {
        menorValor = numbers[index];
    }
}

console.log(menorValor);


// 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let vqv = [];

for (let index = 1; index <= 25 ; index += 1) {
    vqv.push(index);
}

console.log(vqv);


// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < vqv.length; index += 1) {
    console.log(vqv[index] / 2);
}


// Bonus - 1. Ordene o array numbers em ordem crescente e imprima seus valores;

for (let index = 0; index < numbers.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
        if (numbers[index] < numbers[index2]) {
            let ordem = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = ordem;
        }
    }
}

console.log(numbers);


// Bonus - 2. Ordene o array numbers em ordem decrescente e imprima seus valores;

for (let index = 0; index < numbers.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
        if (numbers[index] > numbers[index2]) {
            let ordem = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = ordem;
        }
    }
}

console.log(numbers);


// Bonus - 3. Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push

let newNumbers = []

for (let index = 0; index < numbers.length; index += 1) {
    if (index +1 < numbers.length) {
        newNumbers.push(numbers[index] * numbers[index + 1]);
    } else {
        newNumbers.push(numbers[index] * 2);
    }
}

console.log(newNumbers);