let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1].nodeName;
val = list.childNodes[3].nodeType;

/*
1 - Element
2 - Attribute
3 - Text node
8 - Comment
9 - Document itself
10 - Doctype
*/

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
val = list.children[3].children[0];
val = list.children[3].children[0].children[0];
// First child
val = list.firstChild; // --> Text node
val = list.firstElementChild; // --> To skip the text node
// Last child
val = list.lastChild; // --> Text node
val = list.lastElementChild; // --> To skip the text node
// Count child elements
val = list.childElementCount;
// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;
// Get next sibling
val = list.nextSibling;
val = list.nextElementSibling.nextElementSibling;
// Get next sibling
val = list.previousSibling;
val = list.previousElementSibling.previousElementSibling;

console.log(val);