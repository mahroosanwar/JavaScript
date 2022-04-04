//3Hoisting_in_JavaScript_variables_and_functions

getName(); // Namaste JavaScript
console.log(x); // undefined
console.log(getName); // f getName(){ console.log("Namaste JavaScript); }
function getName(){
 console.log("Namaste JavaScript");
}