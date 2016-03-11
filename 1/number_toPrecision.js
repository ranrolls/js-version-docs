var numObj = 5.123456;

console.log(numObj.toPrecision());    // logs 5.123456
console.log(numObj.toPrecision(5));   // logs 5.1235
console.log(numObj.toPrecision(2));   // logs 5.1
console.log(numObj.toPrecision(1));   // logs 5

// note that exponential notation might be returned in some circumstances
console.log((1234.5).toPrecision(2)); // logs 1.2e+3