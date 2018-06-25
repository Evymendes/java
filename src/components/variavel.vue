<template>

<div>
	<p>Variável: x = "hollo Word",		x = 10</p>
	<p>String: "Hello Word"    'Hello Word'</p>
	<p>Boolean: x = true, y = False, z = null, x = undefined</p>
	<p> {} Object EXEMPLO:    
		pessoa = { altura: 1.87, peso: 90}
		 <span>pegar somente a altura <h3>pessoa.altura</h3></span></p>
	<p>[] Arrays EXEMPLO: > numeros = [1, 2, 3, 4] <span>pegar um INDEX desejado: <h3>numeros[0]</h3>resultado 1</span></p>
</div>
<div> <h2>Operações Aritimetrico</h2> 
  <p>soma: + (2 + 2  = 4),
  	subtração: -(3 - 2 = 1),
  	multiplicação: * (3 * 2 = 6)
  	divisão: / (6 / 2 = 3)
  </p>
  <h2>Abriviado</h2>
  <p>
  	++ (+1) ex: soma = 10 + 10 (20)  soma++  =21   significa(soma = soma + 1)
  	-- (-1) ex: soma = 10 - 5 (5)	soma-- =4
  	+=
  	-=
  	*=
  	/=
  </p>
  <h2>Operadores Igualdade / Relacionais</h2>
  <p>
  	== igual a          5 == 5 TRUE       1 == 2 FALSE
  	!= diferente de     5 != 5 FALSE      1 != 2 TRUE
  	var nome = 'fernando'
	var pessoa = 'paula'
	nome == pessoa   resultado:  false

  </p>
  <p>
  	=== Igual a, e do mesmo tipo		1 === '1'	FALSE     1 ==== 1 TRUE    pq 1= número  '1'=string
  	!==  Diferente, mas do mesmo tipo	1 === '1'	TRUE      1 ==== 1 FALSE
  </p>
  <p>
  	> maior		1 > 2  FALSE  	2 > 1 TRUE
  	< menor		1 < 2 TRUE 		2 < 2	FALSE
  	>= maior ou igual a 	10 >= 10 TRUE
  	<= menor ou igual a 	40 <= 40 TRUE
  </p>
</div>
<div>
	<p>Function É um bloco de código javascript nomeados e que podem ser invocados usando operador ()</p>
	<h3>function nome() {}</h3>
	<p> var x = 1;
			function soma(){
				 x = x + 2;
			}
		> soma()
		> x
		> 3
	</p>
	<p> function exemplo(){
		... var nome = 'Evelyn';
		... return nome;
		... }
		> exemplo()
		'Evelyn'
	</p>

</div>
</template>

<script>
// export default {
//   data () {
//     return {
//       nome: ''
//           }
//   }
</script>

<style type="text/css"></style>
