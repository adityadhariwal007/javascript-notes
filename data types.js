//DATA TYPES
//there are 7 primitive datatypes in javascript
// 1. null--- type of null is a object.
// 2.Number
// 3.string
// 4.symbol
// 5.undefined
// 6.boolean
// 7. biglnt
let x= 'aditya';
let y= 19;
let z= 2.5;
const q= undefined;
let r=null;

console.log(x,y,z,q,r);
console.log(typeof x,typeof y,typeof z,typeof q,typeof r);// yeh type of use hota hai yeh jann ne ke liye ki konsi type ka data hai.
let o={"name":"aditya"}// aise : laga kar define kar skate hai or iska result ayyega --{ name: 'aditya' }
console.log(o);



console.log(typeof 100);        // number
console.log(typeof "Hello");    // string
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof 123n);       // bigint - badi calculations galat na hoye isliye use karte hai 
console.log(typeof Symbol());   // symbol
console.log(typeof {});         // object
