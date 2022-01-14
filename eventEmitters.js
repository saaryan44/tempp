const x=require('events'); const y=new x.EventEmitter();


let yy=9;
setInterval(()=>{y.emit('hi',(()=>++yy)());},1000);
y.on("hi",function(f){console.log(f);});