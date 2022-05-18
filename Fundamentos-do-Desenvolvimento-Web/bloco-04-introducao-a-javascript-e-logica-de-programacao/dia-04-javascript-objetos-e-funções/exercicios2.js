// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificarPalindrome(frase){
    for(index in frase) {
        if (frase[index] != frase[(frase.length -1) - index]) {
            return false;
        }
    }
    return true;
}

console.log(verificarPalindrome('desenvolvimento'));


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function procuraDoMaiorValor (inteiros) {
    let maiorValor = 0;

    for (let index in inteiros) {
        if (inteiros[maiorValor] < inteiros[index]) {
            maiorValor = index;
           
        }
    }
    return maiorValor;
}

console.log(procuraDoMaiorValor([2, 3, 6, 7, 10, 1]));


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function procuraDoMenorValor (numerosInteiros) {
    let menorValor = 0;
    
    for (let index in numerosInteiros) {
        if (numerosInteiros[menorValor] > numerosInteiros[index]) {
            menorValor = index;
           
        }
    }
    return menorValor;
}

console.log(procuraDoMenorValor([2, 4, 6, 7, 10, 0, -3]));


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function procuraDoMaiorNome (nomes) {
    let maiorNome = nomes[0];

    for (let index = 0; index < nomes.length; index += 1) {
        if (nomes[index].length > maiorNome.length) {
            maiorNome = nomes[index];
        }
    }
    return maiorNome;
}

console.log(procuraDoMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


//  5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function acharRapetente(numbers) {
    let repetente = 0;

    let allNumbers = 0;
    let repNumbers = 0;

    for (let index in numbers) {
        let verification = numbers[index];
        for (let index2 in numbers) {
            if (verification === numbers[index2]) {
                repNumbers += 1;
            }
        }
        if (repNumbers > allNumbers) {
            allNumbers = repNumbers;
            repetente = index;
        }
        repNumbers = 0;
    }
    return numbers[repetente];
}

console.log(acharRapetente([2, 3, 2, 5, 8, 2, 3]));


// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somando(natural) {
    let soma = 0;

    for (let index = 0; index <= natural; index += 1) {
        soma = index + soma;
    }
    return soma;
}

console.log(somando(5));

