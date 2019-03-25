/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

> var myarray = [1, 'Evelyn', null, {a: false}, function() {}];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

> function receberArray(arr){
	 return arr;
	}

rerminal
> receberArray(myarray)
[ 1, 'Evelyn', null, false, true ]


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myArray));
console.log(myFunction(myArray) [1] );
> receberArray(myarray)[1]
'Evelyn'


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function doisParametro(arr, index) {
	return arr[ index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valores = ['Evelyn', true, 55.5, ['Evelyn', 50, false], {b: 2}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último array criado.
*/

doisParametro(valores, 0)
doisParametro(valores, 1)
doisParametro(valores, 2)
doisParametro(valores, 3)
doisParametro(valores, 4)


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/


function book(bookName){
	var allBooks = {
	'Segredo do Ninja JavaScript': {
		quantidadePagina: 448,
		autor: 'John Resig & Bear Bibeault',
		editora: 'Novatec'
	},
	'Intradução ao HTML5': {
		quantidadePagina: 220,
		autor: 'Bruce Lawson & Remy Sharp',
		editora: 'Alta Books'
	},
	'Smashing CSS': {
		quantidadePagina: 283,
		autor: 'Erick A. Meyer',
		editora: 'Bookman'
	}
};
	
	return !bookName ? allBooks : allBooks[ bookName ];
	return allBooks;
} 

//return !bookName ? allBooks : allBooks[ bookName ];
if ( !bookName ){
		return allBooks;
	}
<!-- var arr = [1, 2, 3],
var arr = {
	"o": 1,
	"1": 2;
	"2": 3
};

arr["1"] -->

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book() )

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log('O livro Introdução ao HTML5 tem ' + book('Introdução ao HTML5').quantidadePaginas + 'páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O livro Smashing CSS tem ' + book('Smashing CSS ').quantidadePaginas + 'páginas!')

var bookName = 'Smashing CSS';
console.log('O livro ' + bookName+ ' tem ' + book('Smashing CSS ').quantidadePaginas + 'páginas!')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/


var bookName = 'Smashing CSS';
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.')