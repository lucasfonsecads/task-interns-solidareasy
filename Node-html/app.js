var http = require('http').createServer(servidor);
var fs = require('fs'); 
// Para carregar o arquivo html

function servidor(requisicao, resposta){
	// código a seguir vai aqui dentro 
	var url = requisicao.url;
	// variável url vai guardar em que url o navegador está requisitando
    if (url == '/'){
	    resposta.writeHead(200);
	    // 200 é um código de status do http
	    resposta.end(fs.readFileSync('/home/wesandrade/Github/Nodejs/index.html'));
	    // quando o usuario entra na url '/' redireciona pra resposta.end 
	}
	
	else if(url == '/contatos'){
		resposta.writeHead(200);
		// 200 é um código de status do http
		resposta.end("<h1>Pagina Contatos</h1>");
		// quando o usuario entra na url '/contatos' redireciona pra resposta.end 
	}

	else{
		resposta.writeHead(200);
		// 200 é um código de status do http
		resposta.end("<h1>Error 404, Nada Encontrado</h1>");
		// quando o usuario entra em uma url desconhecida ele printa resposta.end
	}
};

http.listen(4000, function(){
	// definir a porta e iniciar o servidor http, usando o .listen
  console.log("Servidor On-line");
  // Printar na tela Servidor Conectado se isso ocorrer
});