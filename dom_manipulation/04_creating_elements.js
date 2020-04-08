// Creat element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';
// Add id
li.id = 'new-item';
// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
const icon = document.createElement('i');
// Add classes
link.className = 'delete-item secondary-content';
icon.className = 'fa fa-remove';
// Add icon html
link.appendChild(icon);
li.appendChild(link);
// link.innerHTML = '<i class="fa fa-remove"></i>'
// // Append link into li
// li.appendChild(link);


// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(icon);