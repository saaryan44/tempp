const x=require('string_decoder').StringDecoder;
const y=new x('utf8');
const a1=Buffer.from([0xE2,0x82]); const a2=Buffer.from([0xAC]); console.log(y.write(a1),y.write(a2));
console.log(a1.toString(),a2.toString());

let p=Buffer.alloc(3);p.write('€','utf-8');console.log(y.write(p));