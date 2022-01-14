/*/*const y=new Promise((a,b)=>{const q=24;if(q>5){a('hello');}else{b('bello');}});*/

/*const z=async ()=>{try{const t=await y; console.log(t);}catch(d){console.log(d);}}; z();*/
/*
function fx(x,y){return ({x,y,hx(){return(this.y);}});}
const b=fx(2,'hi'); console.log(b.hx());*/
/*
function gx(){return({hx(){return(this.y);}});};
const fx=(x,y)=>{let py=Object.create({hx(){return (this.y)}}); console.log(py);py={...py,x,y};return(py);};
console.log(fx(2,'hi'));
const a=fx(4,'hello'); a.__proto__=gx();console.log(a.hx());*/

//const c={hx(){return this.x}};
//const a={x:'hi'};console.log(c.hx.call(a));

/*function fx(x,y){let pl=Object.create(c);pl.x=x;pl.y=y; return (pl);}
/*console.log(fx('hi',44),fx('hu',4).hx());

function dx(x,y){let pl={x,y}; pl.__proto__=c; return (pl)} console.log(dx('gomu',5).hx());*/

/*function Xyz(x){this.g=x;} Xyz.prototype.hx=function(){return(this.g);};
/*console.log((new Xyz("hello").hx()));

console.log('hi' instanceof Object);*/

/*console.log(['hi'].includes('HI'.toLowerCase()));
console.log({nu:'HI'}.nu.toLowerCase().includes('HI'.toLowerCase()));
console.log('hi','i','hp'.includes('h'));*/

/*console.log('hello');*/


function fx(f){this.f=f; console.log(this);}; const h=new fx(5); fx(9);

const gx=g=>{console.log(this);this.g=g; console.log(this);}; gx(99); /* const h=new gx() */