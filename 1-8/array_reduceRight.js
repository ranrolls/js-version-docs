/*
The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) has to reduce it to a single value.
*/ 


[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});  //  return 10


//And if you were to provide an initialValue, the result would look like this:

[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}, 10); //  return 20