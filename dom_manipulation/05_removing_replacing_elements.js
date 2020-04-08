// Replace Elements

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));
// Parent
const cardAction = document.querySelector('.card-action');
// Get the olde heading
const oldHeading = document.getElementById('task-title');
// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove Elements

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// Remove list item
lis[0].remove();
// Remove child element
list.removeChild(lis[3]);

// Classes and Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
val = link;
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link

console.log(val);
