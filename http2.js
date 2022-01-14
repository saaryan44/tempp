const x=require('http'); const y=x.createServer();
y.on('request',(a,b)=>{b.contentType="text/html";b.writeHead(200); b.end(`<html><body><h1 style="float:right; margin-right:123px;">hello universe...</h1></body></html>`);});

y.on('connection',()=>{console.log("a new client has connected to this application...\n");});

y.listen(8124,function(){console.log('\tnode application running at port 8124\n');});

console.log('rest of the application');