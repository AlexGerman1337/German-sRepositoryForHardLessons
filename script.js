let num = 266219;
const arrayOfDigits = Array.from(String(num), Number);
let numSum = arrayOfDigits.reduce((a,b)=>a*b),
    numDegree = numSum**3;

console.log("numSum:", numSum); 
console.log("numDegree:", numDegree)
console.log(String(numDegree).slice(0,2))
