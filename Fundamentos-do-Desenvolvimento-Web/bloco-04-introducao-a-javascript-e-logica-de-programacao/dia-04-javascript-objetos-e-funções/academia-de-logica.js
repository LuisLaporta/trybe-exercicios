// Exercício 2 - Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato:
// {
//     pares: 0, 
//     ímpares: 0 
// }  


function acharParesEImpares (numbers) {
    let numeroPar = 0;
    let numeroImpar = 0;

    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] % 2 === 0) {
            numeroPar += 1;
        } else{
            numeroImpar += 1;
        }
    }
    
    let objeto = {pares: numeroPar, impares: numeroImpar};
    return objeto;
}

console.log(acharParesEImpares([1,2,3,4,5,6,7]));