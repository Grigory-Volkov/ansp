//Модули
var http = require("http");
var url = require("url");
var querystring = require("querystring");

//Запуск сервера
function start(route, handle) {//Экспортируемая функция
	//Обращение к серверу
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		//console.log("Request for \"" + pathname + "\" received.");

		route(pathname, handle, response);

		//var query = url.parse(request.url).query;
		//console.log("query = \"" + query + "\"");

		//console.log("querystring(hello) = \"" + querystring(request.url)["hello"] + "\"");

		//response.writeHead(200, {"Content-Type": "text/plain"});
		//response.write("Hello World");
		//response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;