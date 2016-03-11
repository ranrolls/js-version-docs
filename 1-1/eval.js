/*

The eval() function evaluates JavaScript code represented as a string

A string representing a JavaScript expression, statement, or sequence of statements. 
The expression can include variables and properties of existing objects.

eval() is a function property of the global object.

The argument of the eval() function is a string. If the string represents an expression, 
eval() evaluates the expression. If the argument represents one or more JavaScript statements, 
eval() evaluates the statements. Do not call eval() to evaluate an arithmetic expression; 
JavaScript evaluates arithmetic expressions automatically.

If you construct an arithmetic expression as a string, 
you can use eval() to evaluate it at a later time. For example, suppose you have a variable x.
You can postpone evaluation of an expression involving x by assigning 
the string value of the expression, say "3 * x + 2", to a variable, 
and then calling eval() at a later point in your script.

If the argument of eval() is not a string, eval() returns the argument unchanged. 
In the following example, the String constructor is specified, and eval() 
returns a String object rather than evaluating the string.

*/

eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2");             // returns 4

//  You can work around this limitation in a generic fashion by using toString().
var expression = new String("2 + 2");
eval(expression.toString());


//  indirect call
var x = 5;
function test() {
  var x = 2, y = 4;
  console.log(eval("x + y"));  // Direct call, uses local scope, result is 6
  var geval = eval;
  console.log(geval("x + y")); // Indirect call, uses global scope, throws ReferenceError because `x` is undefined
}

/*

Don't use eval needlessly!

eval() is a dangerous function, which executes the code it's passed with the privileges of the caller. If you run eval() with a string that could be affected by a malicious party, you may end up running malicious code on the user's machine with the permissions of your webpage

eval() is also generally slower than the alternatives, since it has to invoke the JS interpreter, while many other constructs are optimized by modern JS engines

*/

var x = 2;
var y = 39;
var z = "42";
eval("x + y + 1"); // returns 42

//  Using eval to evaluate a string of JavaScript statements    
var x = 5;
var str = "if (x == 5) {console.log('z is 42'); z = 42;} else z = 0; ";

console.log("z is ", eval(str));

//  Last expression is evaluated
var str = "if ( a ) { 1+1; } else { 1+2; }";
var a = true;
var b = eval(str);  // returns 2
 
console.log("b is : " + b);

a = false;
b = eval(str);  // returns 3

console.log("b is : " + b);

var fctStr1 = "function a() {}"
var fctStr2 = "(function a() { console.log('kumar'); })"
//  var fct1 = eval(fctStr1)  // return undefined
var fct2 = eval(fctStr2)  // return a function