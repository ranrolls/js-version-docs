/*

    Extensive user of .prototype and __proto__ to indirect inherit object

*/
var CallablePrototype = function () {};
CallablePrototype.prototype = Function.prototype;

var callablePrototype = new CallablePrototype;

callablePrototype.hello = function () {
   console.log("hello world");
};

/* Our callable "object" */
var callableObject = function () {
   console.log("object called");
};

callableObject.__proto__ = callablePrototype;

callableObject(); // "object called"
callableObject.hello(); // "hello world"
callableObject.hasOwnProperty("hello") // false