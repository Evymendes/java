exercicio Sete

/*
Crie um array com 5 items (tipos variados).
*/

var arrayy = [1, "Evelyn", {quarto: 'cama'}, function soma(x, y) {return x + y;}, false]

 /*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
	arrayy.push(item)
	return arrayy;
}

 /*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

console.log(addItem(["Emanuelly", "Erick", "?"]));



 /*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log("O segundo elemento do segundo array é " + arrayy[4][1]+ ".")


 /*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

console.log("O primeiro array tem "+ arrayy.length +" itens.")


 /*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

console.log("O segundo array tem "+ arrayy[4].length +" itens.")


 /*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var numPar = 10;
while(numPar <= 20){
	numPar % 2 === 0 ? console.log(numPar) : '';
	numPar++;
}
// ?
 /*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );

var numImpar = 10;
while(numImpar <= 20){
	numImpar % 2 !== 0 ? console.log(numImpar) : '';
	numImpar++;
}

 /*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

for(var primeiroPar = 100; primeiroPar <= 120; primeiroPar++ ){
	primeiroPar % 2 === 0 ? console.log(primeiroPar) : '';
}



// ?
 console.log( 'Números ímpares entre 111 e 125:' );
// ? 

for(var segundoImpar = 111; segundoImpar <= 125; segundoImpar++ ){
	segundoImpar % 2 !== 0 ? console.log(segundoImpar) : '';
}


// ou
for(var segundoImpar = 111; segundoImpar <= 125; segundoImpar++ ) {
	if(segundoImpar % 2 !== 0) {
	console.log(segundoImpar);
	}
}