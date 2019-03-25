Escopo de Variáveis

Escopo é o local onde declara uma variável.
-Global: Quando declara a variável fora da função.
-Local: Quando declara a variável dentro da função.   (melhor opção)


ex: Escopo Local

var myvar = 1;

function myFunction() {
	return mymar;
}

myFunction();
1

ex2: Escopo Global

function otherFunction() {
	var otherVar = true;
	return otherVar;
}

otherFunction();
true

otherVar;
error
