// Function declarations

function greet(firstName = 'John', lastName = 'Doe'){
  // Console.log('Hello');

  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// Function expressions

const square = function(x){
  return x*x;
};

console.log(square(8));

// Immediatelly Invokable Function expressions - IIFEs
// (function(){
//   console.log('IIFE Ran...');
// })()

(function(name){
  console.log(`Hello ${name}`);
})('Martin')

const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log(`Delete something`);
}

todo.add();
todo.edit(22);
todo.delete();