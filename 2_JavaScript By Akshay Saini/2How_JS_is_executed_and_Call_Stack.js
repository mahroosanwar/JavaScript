//2How_JS_is_executed_and_Call_Stack

var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}

var square2 = square(n);
console.log(square2);

var square4 = square(4);
console.log(square4);

