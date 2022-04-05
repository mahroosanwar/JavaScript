//Closures in JS

function x() {
    var a=7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;       //return y as function it comes along with it's lexical scope
                    //and a in function doesn't refer to the value but a as reference which is return

}
var z = x();        //this return function y
console.log(z);
//.....
z();