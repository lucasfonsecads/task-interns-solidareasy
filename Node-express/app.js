var express = require('express');
// Importar modulo express
fs = require('fs');
// Para carregar o arquivo html
app = express();
// Criar uma aplicação


app.get('/', function(req, res){
/* -> app.get() = método GET do HTTP, e o 
caminho '/' representando nossa página raiz, 
seguido da função de callback.
-> req e res objetos que o node fornece, você pode 
chamar qualquer coisa que você quiser fazer 
sem involver o Express.*/
	res.end(fs.readFileSync('/home/wesandrade/task-interns-solidareasy/Node-express/index.html'));
});

var server = app.listen(3000);
// Declarando qual porta o servidor vai rodar
console.log('Servidor Conectado - Porta: %s', server.address().port);
// Informar, se o servidor conectar, qual a porta