/*const a=new fx('hi');
function fx(ad){this.h=ad;this.hx=function(){return (this.h);}}
console.log(a.h,a.hx());
console.log(fx('lol'),(new fx('lol')).h,global.h,global.hx());*/

/*const x={a:2,b:3};
const {a}=x;console.log(a);*/

/*
const a;
a=3;*/

const a=[2,3,1]; console.log(a.find(d=>d%2===1),a.find(d=>d===11),a.indexOf(2),a.indexOf(222));
console.log(a.map(a=>(a%2===1?a:)));