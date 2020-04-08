// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }

// One line function doesn't need braces
// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello';

// Return object
// const sayHello = () => ({msg: 'Hello'});

// Singe param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Martin', 'Pfatrisch');

// const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// const nameLengths = users.map((name) => {
//   return name.length
// });

// const nameLengths = users.map(name => name.length);
// console.log(nameLengths);


document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

function getText(){
  fetch('test.txt')
    .then(res => res.text())
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

function getJson(){
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(post => output += `<li>${post.title}</li>`);
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

function getExternal(){
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(user => output += `<li>${user.id}: ${user.login}</li>`);
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err))
}