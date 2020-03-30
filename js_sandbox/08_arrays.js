// Create some arrays
const numbers = [43, 34, 5, 63];
const numbers2 = new Array(23, 534, 45, 7);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(100);

// Mutating arrays
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take of from front
numbers.shift();
// Splice values
// numbers.splice(1,3);

// Concatinate
val = numbers.concat(numbers2);

// Reverse
numbers.reverse();
// Sorting
val = fruit.sort();
val = numbers.sort(function(x, y){
  return x - y;
});

// Find
function under50(num) {
  return num > 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
