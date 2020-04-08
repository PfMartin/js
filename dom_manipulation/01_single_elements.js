// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// Change styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#f4f4f4';
document.getElementById('task-title').style.padding = '5px';

// Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style="color:red">My Tasks</span>';

// Put document.getElementById('task-title') into a variable
const taskTitle = document.getElementById('task-title');

taskTitle.textContent = 'All Tasks';

// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color='red';
document.querySelector('ul li').style.color='blue';

document.querySelector('li:last-child').style.color='green';
document.querySelector('li:nth-child(3)').style.color='yellow';
document.querySelector('li:nth-child(4)').textContent='Hello World';
document.querySelector('li:nth-child(odd)').style.background='#ccc';
