<template>
	<h2>Operadores Lógicos </h2>
	<div>
		<p>&& (and) - Combinar os 2 valores e retorna se é verdadeiro</p>
		<p>var x = 3;
	       var y = 7;
	   	x === 3 && y ===7;
	   TRUE</p>
	   <p>> x === 3 && y === 8;
		false	</p>
	</div>
	<div>
		<p>|| (OR) - se pelo menos um valor é verdadeiro</p>
		<p>var x = 3;
	       var y = 7;
			x === 3 || y === 3;
			true</p>
	</div>
	<div>
		<p>! (NOT) - Inverter o valor</p>
		<P>x = 3;
		! x === 3
		>false</P>
	</div>
	<div>
		<p>> x === y
false
> x == y
false
> x != y
true
> x == 3
true
> x != 3
false
> x === 3
true
> x === '3'
false
></p>
	</div>
	<h2>Operadores Unários</h2>
	<div>
		<p>+3   resultado 3</p>
		<p>+'3' - string   resultado 3  - numero</p>
		<p>> -x
			-5
			> +x
			5  (inverte valor)</p>
	</div>
	<div>
> x = 3
3
> x
3
> x++   //pos-incremento
3
> x
4
> ++x	//pre-incremento
5
	</div>
	<DIV>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords</DIV>

	<div>
		<h2>Instruções Condicionais IF</h2>
		<p>> if (x === 3){
			... y = 2
			... }
			2</p>
		<p>var x = 3; var y = 4;
		 if(x != y && x === 3){
			... x = 2;
			... y = 2;
			... }
			2</p>
	</div>
	<div>
		<p>> if(x === 2){
... x = 4;
... y = 6;
... } else {
... x = 0;
... }
6
> x
4
> y
6
> if(x ==4 6)
if(x ==4 6)
         ^

SyntaxError: Unexpected number

> if(x ==4 6){
if(x ==4 6){
         ^

SyntaxError: Unexpected number

> if(x == 6){
... x = 2;
... y = 2;
... } else {
... x = 10;
... y = 5;
... }
5
> x
10
> y
5</p>
	</div>
</template>