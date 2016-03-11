/*
The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
*/

[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
});      // result 10


//If you were to provide an initial value as the second argument to reduce, the result would look like this:

[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
}, 10);         // result 20


//Sum all the values of an array

var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
// total == 6

//Flatten an array of arrays

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]