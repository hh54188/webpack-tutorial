var path = require('path');

console.log(path.resolve(path.join('.', 'src', 'scripts')));
console.log(path.resolve(path.join('.', 'src', 'styles')));
console.log(path.join(__dirname, 'src', 'scripts'));
console.log(path.join(__dirname, 'src', 'styles'));