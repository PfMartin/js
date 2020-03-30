console.log(123);

// Alert
// window.alert('This is an alert message.');

// Propmt
// const input = prompt('Leave a message.');
// alert(input);

// Confirm
/*
if(confirm('Are you sure?')){
  console.log('Yes');
} else {
  console.log('No');
}
*/

// Height and Width
let outerHeight;
let outerWidth;
let innerWidth;
let innerHeight;

outerHeight = window.outerHeight;
outerWidth = window.outerWidth;
innerWidth = window.innerWidth;
innerHeight = window.innerHeight;

console.log(`Outer dimensions of the window ${outerHeight} x ${outerWidth}`);
console.log(`Inner dimensions of the window ${innerHeight} x ${innerWidth}`);

// Scroll points 
sY = window.scrollY;
sX = window.scrollX;
console.log(sY);

// Location object
loc = window.location;
host = window.location.hostname;
port = window.location.href;
search = window.location.search;

console.log(loc);
console.log(host);
console.log(port);

// Redirect
// window.location.href = 'https://google.com';

// History object
// window.history.go(-2);
visitedSites = window.history.length;
console.log(visitedSites);

let nav = window.navigator;
let version = window.navigator.appVersion;
let name = window.navigator.appName;
let agent = window.navigator.userAgent;

console.log(`Navigator: ${nav}`);
console.log(`Version: ${version}`);
console.log(`Name: ${name}`);
console.log(`Agent: ${agent}`);


