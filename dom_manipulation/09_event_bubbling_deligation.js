// Event bubbling
// Event is on child and bubbles up through all of its parents
const cardTitle = document.querySelector('.card-title');
const cardContent = document.querySelector('.card-content')

cardTitle.addEventListener('click', titleClick);
cardContent.addEventListener('click', contentClick);

function titleClick(e){
  console.log(`Event type: ${e.type}`);
  console.log(`card title`);
}

function contentClick(e){
  console.log(`Event type: ${e.type}`);
  console.log(`card content`);
}

// Event deligation
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  // console.log(e.target);
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete Item');
  // }

  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete Item');
    e.target.parentElement.parentElement.remove();
  }
}