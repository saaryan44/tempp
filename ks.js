//const d=require('lodash')();
//const y=prompt("sya : ");console.log(y+y+y);

/*function hula(a){return(function(b){return(a(b)*b)});}
function gx(a,b){return(a(b)*b);}
function cx(v){return(v*8);}
console.log(hula(cx)(2),gx(cx,2));*/
/*const fx=(a,b)=>a+b;
const gx=v=>q=>r=>v(q,r);
console.log(gx(fx)(2)(4));*/

//const fx=(a,b)=>a*b-1;
//console.log(_.curry(fx)(2,3),_.curry(2)(3));
//console.log(Math.max.apply(null,[1,2,3]),Math.max(1,2));

//console.log(typeof Math,typeof (function fx(){this.a=2;}));

//console.log(isNaN('1'));

//console.log(NaN==NaN,NaN===NaN,NaN!==NaN,NaN!=NaN);

//console.log(typeof 1n,BigInt(1n),BigInt('1'),BigInt(1));

//try{console.log(new BigInt(1))}catch(e){console.log(typeof BigInt);};


/*function fx(){this.a=2;this.b="hi";} function gx(){this.a="factory"; this.b=44; return({nuke:"'em",b:this.a+this.b});}
const x=new fx();const y=new gx();
console.log(x);console.log(y);console.log(gx.prototype,y.__proto__);
function hx(){let xx=6; return({h:xx++,j:'hi'+xx})};
console.log(new hx(),hx());
const a=new hx();
const b=hx();
console.log(a.j,b.j,a.__proto__,"   hi  ",b.__proto__);

function ux(){let x=2; console.log(++x); this.y=4;console.log(++this.y);};
console.log(new ux(),ux());*/


//const a={__proto__:{v:' world'},p:"hi",q:function (){return this.p+" "+this.v;}};  console.log(a.q());
//const u={__proto__:{v:' world'},p:"hi",q: ()=>this.p };  console.log(u.q());
//const a={g:()=>this}; console.log(a.g());

/*const fx1=()=>this.a;fx1.__proto__={a:5};
function fx2(){return(this.a);}
console.log(fx1.call(fx1.__proto__),fx2.call({a:"lol"}));*/

class fx{constructor(){console.log(this);console.log(Object.getPrototypeOf(this)); console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(this)));}gx1(){} gx2(){} static gx3(){}}const p=new fx();console.log("\n\n");console.log(Object.getPrototypeOf(fx)); console.log(Object.getOwnPropertyNames(p)); console.log(Object.getOwnPropertyNames(fx));