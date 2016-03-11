/*

    Private, protected and public variable and methords from an object which is further used at class

*/

function Fun(text) {
    // This is the main function
    var fn = function () {
        return 'main';
    };

    // Attach public variables and methods
    fn.publicVariable = 'public';
    fn.publicMethod = function () {
        return text; // text is a "private variable"
    };

    // Do whatever initialization
    console.log('init');

    // Return the main function     
    return fn;
}

var fun = Fun('this is some text'); // "init"
fun(); // "main"
fun.publicMethod(); // "this is some text"
console.log(fun.publicVariable); // "public"
console.log(fun.text); // undefined