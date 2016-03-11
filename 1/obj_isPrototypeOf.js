/*

The isPrototypeOf() method tests for an object in another object's prototype chain.

isPrototypeOf differs from the instanceof operator. 
In the expression "object instanceof AFunction", the object prototype chain is 
checked against AFunction.prototype, not against AFunction itself.

prototypeObj.isPrototypeOf(obj)

*/

function Fee() {
  // ...
}

function Fi() {
  // ...
}
Fi.prototype = new Fee();

function Fo() {
  // ...
}
Fo.prototype = new Fi();

function Fum() {
  // ...
}
Fum.prototype = new Fo();

var fum = new Fum();
// ...

if (Fi.prototype.isPrototypeOf(fum)) {
  // do something safe
}