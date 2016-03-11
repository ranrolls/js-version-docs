var utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));

console.log(utcDate);

var d = Date.UTC(2012,02,30);
console.log(d);

//var now = new Date();
//var utc_now = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
//console.log('UTC: ' + utc_now); // correct UTC time but wrong timezone!
//console.log('UTC (in ms): ' + utc_now.getTime());
//
//function getUTCNow()
//{
//    var now = new Date();
//    var time = now.getTime();
//    var offset = now.getTimezoneOffset();
//    offset = offset * 60000;
//    return time - offset;
//}
//
//console.log(getUTCNow());

console.log(Date.now());