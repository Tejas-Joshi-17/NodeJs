// Importing the 5th_Export.js module 
const Math = require('./5th_Export');                  // Require returns an object with add() 

const Addition = Math.add(10, 5); 
const Subtraction = Math.subtract(10, 5)

console.log('The Addition is:', Addition);              // The Addition is: 15
console.log('The Subtraction is:', Subtraction);        // The Subtraction is: 5