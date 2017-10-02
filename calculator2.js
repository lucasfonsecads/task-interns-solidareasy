var n1 = 35, n2 = 99;


console.log('Calculadora com função');

console.log(`  [ + ] - Soma \n`);
Soma();

console.log(`  [ - ] - Subtração \n`);
Subtracao();

console.log(`  [ / ] - Divisão \n`);
Divisao();

console.log(`  [ * ] - Multipĺicação \n`);
Multipĺicacao();


function Soma(){
	res1 = n1 + n2;
	console.log(res1);
}
function Subtracao(){
	res2 = n1 - n2;
	console.log(res2);
}
function Multipĺicacao(){
	res4 = n1 * n2;
	console.log(res4);
}
function Divisao(){
	res3 = n1 / n2;
	console.log(res3);
}