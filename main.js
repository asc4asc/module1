import * as c1 from './lib/counter.js';
import { counter , decrement, increment as testvar , testdec, testinc from './lib/counter.js'; 
  
console.log("Info1:",testvar); // 1
testinc();
console.log("Info2:",testvar); // 2  
testdec();
testdec();
console.log("Info:3",testvar); // 0  

console.log("Info1:",c1.counter); // 0
c1.increment();
console.log("Info2:",c1.counter); // 1
c1.decrement();  
c1.decrement();  
console.log("Info3:",c1.counter); // -1  
