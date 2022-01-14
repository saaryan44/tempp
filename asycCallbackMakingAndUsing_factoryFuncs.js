const fx=n=>{if(n<2){return n;} return (fx(n-1)+fx(n-2))}; console.log(fx(15));

const gx=function(){};

gx.prototype.hx=function(m){let a1=arguments[arguments.length-1]; let a2=(typeof a1==="function"?a1:null); let a3=(typeof m==="number"?m:null); if(!a2){return (new Error("the last argument must be a callback with the valid parameter list of error and value, in that order."));} if(!a3){return (a2((new Error("The first argument is either not a number or has not been provided.\n"))));} process.nextTick(function(){a2(null,fx(m));});}

const c1=new gx();
c1.hx(15,function(e,v){if(e){console.log(e);}else{console.log(v);}});