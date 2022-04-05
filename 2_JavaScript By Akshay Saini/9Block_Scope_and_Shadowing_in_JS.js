//9Block_Scope_and_Shadowing_in_JS
var a = 100;
let d = 50;      //this d is not in block scope but another scope
{
    var a = 10;         //a in global scope
    let b = 20;         //b and c in block scope
    const c = 30;
    let d = 40;         //d in block scope
    console.log(a);     //10
    console.log(b);     //20
    console.log(c);     //30
    console.log(d);     //40
}

console.log(a); // 10 --> this also change the value of a above to 10-->
//and this is called shadowing  and l:7 & L:12 both are refereing to the same memory space
console.log(d);     //50
console.log(b); // Uncaught ReferenceError: b is not defined
console.log(c); 