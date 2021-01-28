const http = require('http'); 
const server = http.createServer(); 
const port = 8080; 

server.on('request', (request, response) => { 
  if( request.method === 'GET' && request.url === "/hey") { 
    response.writeHead(200, {'content-type':'text/html'}); 
    response.write('<h1>Ho</h1>'); 
    response.end(); 
  }

 

}).listen(port, () => console.log(`server listening on ${port}`))