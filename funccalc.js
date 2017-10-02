var x = 4; y = 2;

Sum();
Sub();
Mult();
Div();
Mod();


function Sum(){
    sum = x + y;
    console.log(`Soma = ${sum}`);
}function Sub(){
    sub = x - y;
    console.log(`Subtração = ${sub}`);
}function Mult(){
    mult = x * y;
    console.log(`Multplicação = ${mult}`);
}function Div(){
    div = x / y;
    console.log(`Divisão = ${div}`);
}function Mod(){
    mod = x % y;
    console.log(`Resto = ${mod}`);
}
