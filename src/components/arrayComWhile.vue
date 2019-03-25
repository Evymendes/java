// Seção 7, aula 40
var arr = ['Evelyn', null, true, { bola: 'azul' }, function() {} ];

arr.length

var qtd = arr.length;

while( qtd > 0 ){
	console.log(arr[ qtd-- ]);
}

while( qtd >= 0 ){
	console.log(arr[ --qtd ]);
}

while( qtd > 0 ){
	console.log(arr[ --qtd ]);
	if(qtd === 3){
		console.log( arr[ qtd ].bola );
	}
}

// Seção 7, aula 41

array.push("acrescenta o que quiser no final")

pode  ser reescrever  :
var arr = ['Evelyn', null, true, { bola: 'azul' }, function() {}, ['la1', 'la2', 'la3'] ];


ou acrescentando:
arr.push( {carro: 'BMW'});

arr[3].bola
arr[5][2]
> arr.push(function soma(x, y) {return x+y;} ) 
9
> arr[7]
[Function: soma]
> arr[8](1, 2)
3

var num = 0;
while(num < 20){
	console.log(num++);
}

for(var num = 0; num < 20; num++) {
	console.log(num);
}

for(var num = 2, arroz = 3; num < 5; num++) {
	console.log(num);
	console.log(arroz++);
}
}
