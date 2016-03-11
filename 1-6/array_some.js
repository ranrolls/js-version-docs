//  The some() method tests whether some element in the array passes the test implemented by the provided function.

function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true


[2, 5, 8, 1, 4].some(elem => elem > 10);  // false
[12, 5, 8, 1, 4].some(elem => elem > 10); // true

var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
}

checkAvailability(fruits, 'kela'); //false
checkAvailability(fruits, 'banana'); //true

var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
    return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela'); //false
checkAvailability(fruits, 'banana'); //true
