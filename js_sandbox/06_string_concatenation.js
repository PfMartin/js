const firstName = 'Martin';
const lastName = 'Pfatrisch';
const age = 28;
const sentence = 'Hello there my name is Martin.';
const tags = 'Web design, Web development, Programming'

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Martin ';
val += 'Pfatrisch';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf('r');
val = firstName.lastIndexOf('r');

// charAt()
val = firstName.charAt('2');
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);
// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = sentence.split(' ');
val = tags.split(',');

// replace()
val = sentence.replace('Martin', 'Idiot');

// includes
val = sentence.includes('Martin');

console.log(val);

