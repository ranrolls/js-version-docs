/*
Closures are functions that refer to independent (free) variables. 
In other words, the function defined in the closure 'remembers' 
the environment in which it was created.

That the code still works may seem unintuitive. Normally, 
the local variables within a function only exist for the duration 
of that function's execution. Once makeFunc() has finished executing, 
it is reasonable to expect that the name variable will no longer be accessible. 
Since the code still works as expected, this is obviously not the case.

The solution to this puzzle is that myFunc has become a closure.
*/
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();


/*  In this example, we have defined a function makeAdder(x) 
    which takes a single argument x and returns a new function. 
    The function it returns takes a single argument y, 
    and returns the sum of x and y
*/
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


//  Practical closures
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;


//  Emulating private methods with closures
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1


//  Creating closures in loops: A common mistake
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    //  below is the wrong way
    //  document.getElementById(item.id).onfocus = function() { showHelp(item.help); }
  }
}

setupHelp();


/*
Performance considerations

It is unwise to unnecessarily create functions within other functions 
if closures are not needed for a particular task, as it will negatively affect 
script performance both in terms of processing speed and memory consumption.

For instance, when creating a new object/class, methods should normally be associated 
to the object's prototype rather than defined into the object constructor. 
The reason is that whenever the constructor is called, 
the methods would get reassigned (that is, for every object creation).

the inherited prototype can be shared by all objects and the method definitions need not occur at every object creation
*/
function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
(function() {
    this.getName = function() {
        return this.name;
    };
    this.getMessage = function() {
        return this.message;
    };
}).call(MyObject.prototype);

