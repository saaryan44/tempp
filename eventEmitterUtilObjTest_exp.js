const x=require('util'); const y=require('events').EventEmitter;

const g={a:2,b:'hi'};// x.inherits(g,y);
g.__proto__=y;
g.fx=function(){this.emit('hi','hello world');}

g.on("hi",val=>{console.log(val);});

//const ghx=()=>{g.fx();};
//setTimeout(ghx,1000);