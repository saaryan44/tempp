const x=require('fs'); const y=require('http');

y.createServer((a,b)=>{var nm="amred with wings.jpg"; 
	
		x.stat(nm,(e,cv)=>{if(e){console.log(e); b.end(`<html><body><img src="amred with wings.jpg" /> <span> <b> is not available</b></body></html>`);}else{

			let ur=x.readFileSync(nm);
			b.writeHead(200,{'Content-Type':'image/jpeg'});
			b.end(ur,'binary');
		}});

	}).listen(8124);

console.log('nodejs server running at port 8124');