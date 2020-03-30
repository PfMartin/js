const id = 100;

/*
if(id == 100){
  console.log('ID is 100');
} else if(id < 100){
  console.log('ID is below 100');
} else {
  console.log('ID is above 100');
}

if(id != 100){
  console.log('ID is not 100');
} else {
  console.log('ID is 100');
}

// Equal to value and type
if(id === 100){
  console.log('ID is a number and its value is 100');
} else if(id !== 100){
  console.log('ID is not equal to 100 or not a number')
}
*/

// Test if undefined 
/*
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID')
}
*/

/*
const color = 'red';

if(color == 'red') {
  console.log('Color is red');
} else if(color == 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is neither blue nor red')
}
*/

const name = 'Steve';
const age = 13;

// AND &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else{
  console.log(`${name} is an adult`)
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} is not allowed to compete in the race`)
} else{
  console.log(`${name} is registered for the race`)
}

// Ternary operator
console.log(id === 100 ? 'Correct' : 'Incorrect');

// Without braces
if(id === 100)
  console.log('Correct');
else
  console.log('Incorrect')