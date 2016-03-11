/*

The toLocaleString() method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.

obj.toLocaleString();

Objects overriding toLocaleString

Array: Array.prototype.toLocaleString()
Number: Number.prototype.toLocaleString()
Date: Date.prototype.toLocaleString()

*/


var d = new Date();
var a = d.toLocaleString();
console.log(a);

var k = new Date();
a = k.toString();
console.log(a);