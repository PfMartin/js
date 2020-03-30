// var, let, const
var name = 'John Doe';
console.log(name);
var name = 'Steve Smith';
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// Letters, number, _, $
// Can not start with number
// Multi word vars
var camelCase = 'recommended for every programming language';
var under_score = 'under score';
var PascalCase = 'especially for classes';

// LET
let name;
name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// CONST
const name = 'John';
console.log(name);
// const can't be asigned to new value
name = 'Sara';
// Have to assign a value
const greeting;
const person = {
  name: 'John',
  age: 30
}
person.name = 'Sara';
person.age = 32;

// console.log(person);
const number = [1,2,3,4,5];
number.push(6);

console.log(number);
