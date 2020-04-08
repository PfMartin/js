document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create XHR Object
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.txt', true);
  xhr.onload = function() {
    document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
  }

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }
  
  xhr.send();
}