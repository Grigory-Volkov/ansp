//подключение модуля server.js
var server          = require("./server");
var router          = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {
	"/"      : requestHandlers.start,
	"/start" : requestHandlers.start,
	"/result": requestHandlers.result,
	"/upload": requestHandlers.upload
}

//вызов функции start()
server.start(router.route, handle);