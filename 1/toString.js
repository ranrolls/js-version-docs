/*

obj.toString()

Every object has a toString() method that is automatically called when the object is to be represented as a text value or when an object is referred to in a manner in which a string is expected. By default, the toString() method is inherited by every object descended from Object. If this method is not overridden in a custom object, toString() returns "[object type]", where type is the object type.

*/

var o = new Object();
o.toString();


function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');

console.log(theDog.toString());

Dog.prototype.toString = function dogToString() {
  var ret = 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
  return ret;
}

console.log(theDog.toString());

var toString = Object.prototype.toString;

var a = toString.call(new Date);    // [object Date]
console.log(a);

a = toString.call(new String);  // [object String]
console.log(a);

a = toString.call(Math);        // [object Math]
console.log(a);
// Since JavaScript 1.8.5
a = toString.call(undefined);   // [object Undefined]
console.log(a);

a = toString.call(null);
console.log(a);

