import * as c1 from './lib/counter.js';
  
console.log("Info1:",count); // 0
c1.increment();
console.log("Info2:",count); // 1
c1.decrement();  
c1.decrement();  
console.log("Info3:",count); // -1  
