//  The map() method creates a new array with the results of calling a provided function on every element in this array.

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3], numbers is still [1, 4, 9]


var kvArray = [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}];
var reformattedArray = kvArray.map(function(obj){ 
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});
// reformattedArray is now [{1:10}, {2:20}, {3:30}], 
// kvArray is still [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}]

var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9]


var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]


var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});


var str = '12345';
Array.prototype.map.call(str, function(x) {
  return x;
}).reverse().join(''); 

// Output: '54321'
// Bonus: use '===' to test if original string was a palindrome


function returnInt(element) {
  return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// Actual result is an array of numbers (as expected)

// A simpler way to achieve the above, while avoiding the "gotcha":
['1', '2', '3'].map(Number); // [1, 2, 3]