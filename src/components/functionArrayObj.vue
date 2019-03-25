function array() {
... return  [1,2,3,4]
... }

acessar array
array()[2];

Objeto

function objetoo() {
 return {
	 prop1: 1,
	 prop2: 'Evelyn',
	 prop3: function(){
	 return 'prop3';
	 }
	}
}

> objetoo().prop3
[Function: prop3]
> objetoo().prop3()
'prop3'


var values = objetoo();


receber por parametros

> var arr = [1, 2, 3];
undefined
> function myfunction(arg){
... return arg;
... 
... }
> myfunction([1, 'Evelyn', true]);
[ 1, 'Evelyn', true ]


> function myfunction2(arg){
 return arg[1]; 
 }

> myfunction2([1, 2, 3])
2


parametros de função. {seção 5, aula:29}

> var obj = {
... propriedade: 'Evelyn',
... curso: 'React-Native',
... ninja: false
... }
undefined
> function myfunction(arg) {
... return arg;
... }
undefined
> function myfunction(obj) {
... 
> function myfunction(obj)
... 
> myfunction(obj)
{ propriedade: 'Evelyn', curso: 'React-Native', ninja: false }
> myfunction(obj).propriedade
'Evelyn'

// receber parametro expecifico

> function myfunction3(arg) {
... return arg.curso;
... }
undefined

> myfunction3(obj)
'React-Native'

