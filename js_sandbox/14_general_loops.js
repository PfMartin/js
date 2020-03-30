// For loop
for(let i = 0; i < 10; i++){
  if(i == 2){
    console.log(`${i} is my favorite number`);
    continue;
  }

  if(i == 5){
    console.log('Stop the loop')
    break;
  }
  console.log(`Number ${i}`);
}

// While
let i = 0;

while(i < 10){
  console.log(`Number ${i}`);
  i++
}

// Do While
i = 100;

do {
  console.log(`Number ${i}`);
  i++
}
while(i < 10);


const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

/*
for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}
*/

/*
cars.forEach(function(car){
  console.log(car);
});
*/

// Map
/*
const users = [
  {id:1, name:'John'},
  {id:2, name:'Sara'},
  {id:3, name:'Karen'}
];

const ids = users.map(function(user){
  return user.id;
})

console.log(ids);
*/

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x}: ${user[x]}`);
};