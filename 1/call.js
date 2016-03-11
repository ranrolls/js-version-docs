/*
The call() method calls a function with a given this value and 
arguments provided individually

A different this object can be assigned when calling an existing function. 
this refers to the current object, the calling object. With call, 
you can write a method once and then inherit it in another object, 
without having to rewrite the method for the new object

Using call to invoke an anonymous function
we create an anonymous function and use call to invoke it on every object in an array. 
The main purpose of the anonymous function here is to add a print function to every object, 
which is able to print the right index of the object in the array. 
Passing the object as this value was not strictly necessary, 
but is done for explanatory purpose.
*/
var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i); // addition 2nd parameter here, and we can give as many as we like.
}

/*
Using call to invoke a function and specifying the context for 'this'

*/
function greet() {
  var reply = [this.person, 'Is An Awesome', this.role].join(' ');
  console.log(reply);
}

var i = {
  person: 'Douglas Crockford', role: 'Javascript Developer'
};

greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer

//  Using call to chain constructors for an object

function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError('Cannot create product ' +
                      this.name + ' with a negative price');
  }
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);