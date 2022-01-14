//class x{
//	constructor(){this.a='1';}
	
//}
//x.prototype.b=()=>this.a;

const x=[1,2,3];console.log(x[Symbol.iterator]); for(const h of x){console.log(h);}
x[Symbol.iterator]=function values(){let n=-1;  return({next(){n++; if(n<this["length"]){return({value:this[n],done:false});} return({value:undefined,done:true});}});}
console.log(x[Symbol.iterator]().next());
