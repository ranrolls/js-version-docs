var ar = [0];

for(var i = 0; i < 9; i++){ ar[i] = i; }

console.log(ar);

var sm = [10, 23, 41, 13],
        md = [1, 7, 13, 22, 36, 42, 55, 60, 72, 88, 90, 103, 123, 158, 200, 222, 323, 443, 501, 545, 610, 728, 880, 891, 903, 919, 1001, 2011]
         lg = (function() {
        var result = [];
        for (var i = 0; i < 200; i++) {
          result.push(~~ (Math.random() * 1000));
        }
        return result;
      }());


console.log(lg.reduce(function(a, b) {
  a + b;
}));

var sumLg = 0;
for (var i = lg.length - 1; i >= 0; i--) {
  sumLg += lg[i];
}
console.log(sumLg);


//  fastest for loop

for(var i=0,n=md.length; i<n; ++i)
{
    total += md [i];
}