/*

    last defination of function override previously defined function;
    access number of arguments will not produce error

*/
function k(a, b, c, d){
    console.log('in k1');
//    if(typeof a == "undefined"){
//        var a = 0;
//    }
//    if(typeof b == "undefined"){
//        var b = 0;
//    }
//    if(typeof c == "undefined"){
//        var c = 0;
//    }
//    if(typeof d == "undefined"){
//        var d = 0;
//    }
//    console.log(a);

}

function k(a,b){
    // last function created override the previous created func totally
    // access parameters are droped
    console.log(JSON.stringify(arguments));
    console.log('in k2');
}

k(1,2,3);


