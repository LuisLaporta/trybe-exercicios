// Exercício 1
//Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let name of names) {
    console.log(name);
}

var arr = [1,2,3,4,5,6,7,8,9,10];
var soma = 0;

for(var index = 0; index < arr.length; index += 1) {
	soma += arr[index];
}

console.log(soma);