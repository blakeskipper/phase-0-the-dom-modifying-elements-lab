// Write your code here!

document.querySelector('main').remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.textContent = '<h1>victory</h1><p>BLAKE SKIPPER is the champion</p>'
document.body.appendChild(newHeader);
