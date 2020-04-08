const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
// const taskInput = document.getElementByID('taks');

taskInput.value = '';

// form.addEventListener('submit', submitTask);
function submitTask(e){
  console.log(`Event Type: ${e.type}`);
  console.log(taskInput.value);
  taskInput.value = '';

  e.preventDefault();
}

const heading = document.querySelector('h5');
// taskInput.addEventListener('keyup', typingOutput);
// keydown, keyup, keypress

function typingOutput(e){
  console.log(`Event type: ${e.type}`);
  console.log(e.target.value);

  heading.innerText = e.target.value;
}

// Focus and blur 
// When you click inside or outside of an input
// taskInput.addEventListener('focus', eventTypeLogger);

// taskInput.addEventListener('paste', eventTypeLogger);
// cut, paste, copy

taskInput.addEventListener('input', eventTypeLogger);

function eventTypeLogger(e){
  console.log(`Event type: ${e.type}`);
}

const select = document.querySelector('select');

// Change event
select.addEventListener('change', eventTypeLogger);