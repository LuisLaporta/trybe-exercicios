//6. Faça um programa que diz se um número definido numa letiável é primo ou não.

let teste = 5;
let divisor = 1;

for (let numeros = 2; numeros <= teste; numeros += 1) {
    if (teste % numeros === 0) {
        divisor += 1;
    }
}

if (divisor === 2) {
    console.log(teste + " é número primo.")
} else {
    console.log(teste + " não é número primo.")
}