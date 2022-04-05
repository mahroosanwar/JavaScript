// 10 Closures in JS2

function z(){
    var b = 900;
    function x(){
        var a = 7;
        function y(){
            console.log(a, b);
        }
        y();
    }
    x();
}
z();