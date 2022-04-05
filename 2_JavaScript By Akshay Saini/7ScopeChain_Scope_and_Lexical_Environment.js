//7ScopeChain_Scope_and_Lexical_Environment

function a() {
    var b = 10;
    c();
    function c() {
        console.log(b); // 10
    }
}
a();