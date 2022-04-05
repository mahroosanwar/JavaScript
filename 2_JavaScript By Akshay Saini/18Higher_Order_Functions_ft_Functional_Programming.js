//Higher-Order Functions ft. Functional Programming

const radiusArr = [1, 2, 3, 4];

//Logic to calculate area
const area = function(radius){
    return Math.PI * radius * radius;
}

//logic to calculate circumference
const circumference = function(radius){
    return 2 * Math.PI * radius; 
}

//logic to calculate diameter
const diameter = function(radius) {
    return 2 * radius;
}

const calculate = function(radiusArr, logic) {
    const output = [];
    for(let i=0; i<radiusArr.length; i++) {
        output.push(logic(radiusArr[i]));
    }
    return output;
}

console.log(calculate(radiusArr, area));
console.log(calculate(radiusArr, circumference));
console.log(calculate(radiusArr, diameter));

//map is higher order function
console.log(radiusArr.map(area));
// Over here calculate is HOF
// Over here we have extracted logic into separate functions. This is the
// beauty of functional programming.
// Polyfill of map
// Over here calculate is nothing but polyfill of map function
// console.log(radiusArr.map(area)) == console.log(calculate(radiusArr,
// area));
// ***************************************************
// Lets convert above calculate function as map function and try to use. So,
Array.prototype.calculate = function(operation) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(operation(this[i]));
    } 
    return output;
}
console.log(radiusArr.calculate(area))