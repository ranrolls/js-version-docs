/*

    giving init to function

*/
function create(text)
{
    var main = function()
    {
        console.log('main');
        console.log(this);
    }
    var init = function()
    {
        console.log('init');
        main.text = text;
    }
    main.method = function()
    {
        console.log(main.text);
    }
    init();
    return main;
}
//the following line will call init
var fun = create('some variables');
//call main
fun();
//call methods
fun.method();