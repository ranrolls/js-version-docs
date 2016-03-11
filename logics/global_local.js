/*

    undefined variable assigned scope is set to global by default

*/


function setGlobal() {
  a = 42;
}
function setLocal() {
  var b = 23;
}
setGlobal();
console.log(a); // 42
setLocal();
//console.log(b); // ReferenceError: b is not defined