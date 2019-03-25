Tipos:
	Tipos Primitivos: Number, String, Boolean, Null (ausência de valor), undefined(não existe)
	Tipos de Objetos: Tudo que ñ tem no tipo primitivo, Conjuntos de propriedades(recebe nome e valor)
		{propriedade: 'valor'}
		var objeto = {propriedade: 'valor', propriedade2: 10, propriedade3: true}

var pessoa = { nome: 'Evelyn', idade: 24, sexo: 'F'}

> pessoa.cor = 'Parda';


> pessoa.aniversario = function() {
... pessoa.idade++;
... }

> pessoa.aniversario()



> pessoa.andar = function() {
... return 'Pessoa andando!';
... }

> pessoa.andar()
'Pessoa andando!'



> pessoa.sobrenome = 'Mendes';

> pessoa.nomeCompleto = function() {
... return pessoa.nome + ' ' + pessoa.sobrenome;
... }

> pessoa
{ nome: 'Evelyn',
  idade: 25,
  sexo: 'F',
  cor: 'Parda',
  aniversario: [Function],
  andar: [Function],
  sobrenome: 'Mendes',
  nomeCompleto: [Function] }



VARIÁVEL:
> var myvar = 2;

FUNÇÃO:
> function arroz() {}

OBJETO:
> var objeto = {propriedade: 'valor'}

OBJETO Acrescentando:

> var objeto = {propriedade2: 'valor'}

MÉTODO:
> var objeto2 = { propriedade2: 'valor', metodo: function() {} }


Função é fora do Objeto, já método é dentro.
objeto.propriedade
objeto.metodo()