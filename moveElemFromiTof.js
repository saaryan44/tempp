Array.prototype.hii=function(i,f){let g=f-this.length-1;if(g>0){while(g--){this.push(undefined);}} this.splice(f,0,this.splice(i,1)[0]);};


const b=[11,22,33];
b.hii(0,1);console.log(b);