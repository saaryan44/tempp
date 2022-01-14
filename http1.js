const x=require('http');

x.createServer(function(a,b){b.writeHead(200,{'Content-Type':'text/html'}); b.end(`<html><body><h1>hello world</h1></body></html>`);}).listen(8124,function(){console.log("listening on port 8124");});
console.log('rest of the application');