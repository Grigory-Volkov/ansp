function route(pathname, handle, response) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function')
  	handle[pathname](response);
  else { 
  	//console.log("Not found handler for \"" + pathname + "\"")
  	response.writeHead(404, {"Content-Type": "text/plain"});
  	response.write("404 Not found \"" + pathname + "\"");
  	response.end();
  }
}

exports.route = route;