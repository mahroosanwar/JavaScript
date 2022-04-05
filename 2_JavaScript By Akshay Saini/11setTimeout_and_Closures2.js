// 11setTimeout_and_Closures_2

// function x(){
//     for(var i = 1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("javaScript");
// }
// x();
// Output:
// Namaste Javascript
// 6
// 6
// 6
// 6
// 6

// fix
// use "let" insted of bcz it creates a block for every loop 
// function x(){
//     for(let i = 1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("javaScript");
// }
// x();

//but fix thi sby using var
function x() {
    for(var i = 1; i<=5; i++){
        function close(i) {
            setTimeout(function() {
                console.log(i);
            }, i*1000);
            // put the setT function inside new function close()
        }
        close(i); // everytime you call close(i) it creates new copy
        //of i. Only this time, it is with var itself!
    }
    console.log("Javascript");
}
x();