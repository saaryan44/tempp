const x=require('util'); const y=require('fs'); const z=require('events').EventEmitter;

function fx(a,b){this.ctbt=a;this.mtbt=y.createWriteStream('./'+b+'.txt',{'flags':'a','encoding':'utf8','mode':0o666}); }

x.inherits(fx,z);

fx.prototype.mhx=function(hi){let v=hi.trim().substr(0,3); if(v==='wr:'){this.emit('write',hi.substr(3,hi.length));}else if(v==="ex:"){this.emit('exit');}else{this.emit('echo',hi);}}

const yup=new fx("Aaryan","quotations");

yup.on("write",val=>{yup.mtbt.write(val,"utf8");}); yup.on("ex",()=>{process.exit();}); yup.on("echo",val=>{process.stdout.write(yup.ctbt+" wrote "+val);});

process.stdin.setEncoding("utf8");
process.stdin.on("readable",()=>{let i=process.stdin.read(); if(i!=null){yup.mhx(i);}});