
console.log("hi");
process.stdin.setEncoding('utf-8');

setInterval(()=>{process.stdin.on('readable',function(){let i=process.stdin.read(); if(i!=null){if(i.trim()==='exit'){process.stdout.write('exiting the application...\n');process.exit(0);}process.stdout.write('hello, '+i+' ~san \n'); }});},1000);
console.log("bye");

let x=Buffer.from('hellp'); console.log(typeof x,x instanceof Buffer); console.log(Buffer.from([1,2,'hi']) instanceof Buffer,Buffer.from(['hi',2,3]).toString().trim(),"hi ".trim());
let y=Buffer.from(x);
console.log(x==y,x===y,Buffer.from('hello world').toString());