// 1.  O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

var numero = 10;
var fatorial =  1;

for (var index = 1; index <= numero; index += 1) {
    fatorial = fatorial * index;
}

console.log(fatorial);

// 2. Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab".

let word = 'tryber';
let drow = '';

for (let index = word.length-1; index >= 0; index -= 1) {
    drow = drow + word[index];
}

console.log(drow);

// 3. Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPlavra = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}

console.log(maiorPalavra);

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < menorPlavra.length) {
        menorPlavra = array[index];
    }
}

console.log(menorPlavra);

// 4. Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let numeroPrimo = 0;

for (let numeros = 0; numeros <= 50; numeros +=1) {
    let primo = true;
    for (let divisor = 2; divisor < numeros; divisor += 1) {
        if (numeros % divisor ===0) {
            primo = false;
        }
    }
    if (primo) {
        numeroPrimo = numeros;
    }
}

console.log(numeroPrimo);


