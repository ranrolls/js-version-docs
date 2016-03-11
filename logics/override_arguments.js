/*

    last defination of function override previously defined function;
    access number of arguments will not produce error

*/
function k(){
    console.log('in k1');
//    console.log(this);
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


k(1,2,3);


