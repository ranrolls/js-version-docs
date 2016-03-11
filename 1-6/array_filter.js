
//  filter() does not mutate the array on which it is called.
function isBigEnough(value, index, array) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]


