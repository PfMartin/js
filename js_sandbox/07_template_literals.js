const name = 'Martin';
const age = 28;
const job = 'Web developer';
const city = 'Miami';

let html;

// Without template string (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li>'

html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' + 
        '<li>City: ' + city + '</li>'

function hello() {
  return 'Hello';
}

// With template strings (literals)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Name: ${age}</li>
    <li>Name: ${job}</li>
    <li>Name: ${city}</li>
    <li> ${2 + 2}</li>
    <li> ${hello()}</li>
    <li> ${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
  `;

document.body.innerHTML = html;