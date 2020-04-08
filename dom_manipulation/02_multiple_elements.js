// document.getElementsByClassName
/*
const items = document.getElementsByClassName('collection-item');

console.log(items);
console.log(items[1]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

// Nested
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);
*/

// document.getElementsByTagName
/*
let lis = document.getElementsByTagName('li');

console.log(lis);
console.log(items[1].textContent);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello Hello';

// Convert HTML Collection into array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});
*/

// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
  li.style.background = '#333';
  li.style.color = '#f4f4f4'; 
})

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
  liEven[i].style.color = '#333';
};

console.log(items);
