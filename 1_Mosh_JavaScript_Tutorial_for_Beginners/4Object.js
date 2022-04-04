//Object

let person = {
    name: 'Mahroos',
    age: 24
};

//Dot Notation
person.name = 'Falah';

console.log(person);

//Bracket Notation
let selection = 'name';
person[selection] = 'Ismaeel';
person['age'] = 1;

console.log(person);
