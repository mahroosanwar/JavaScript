// /setTimeout + Closures

function x(){
    var i = 1;
    setTimeout(function(){
        console.log(i);
    }, 3000);
    console.log("JavaScript");
}
x();
//O/P
//JavaScript
//1 (after 3 sec)