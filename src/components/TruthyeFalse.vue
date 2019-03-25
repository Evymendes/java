Truthy e False

Quando precisa avaliar ou testar se o valor é booleano. ex: pelo if

Thuthy - Valor booleano representa por true.
Falsy - Todo valor que converte  booleano  false. ex: undefined, null, 0, -0, false, NaN, ' ', " "

EX:
var teste;

	if (1){
		teste = true;
	} else {
		teste = false;
	}
	resultado: TRUE   (1 é verdadeiro)

	if (0){
		teste = true;
	} else {
		teste = false;
	}
	resultado: FALSE    (0 é falso)

	if ('Evelyn')
		{ teste = true;
	} else{ 
		teste = false;}
	resultado: TRUE

	if (undefined){ 
		teste = true;
	} else {
		teste = false;
	}
	resultado: FALSE

outra forma de descobrir se é booleano sem usar o if é !!. 
1 	resultado 1
!1	resultado: FALSE
!!1 resultado: TRUE 