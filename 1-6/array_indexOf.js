var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0


var array = [2, 5, 9, 2];
array.lastIndexOf(2);     // 3
array.lastIndexOf(7);     // -1
array.lastIndexOf(2, 3);  // 3
array.lastIndexOf(2, 2);  // 0
array.lastIndexOf(2, -2); // 0
array.lastIndexOf(2, -1); // 3

