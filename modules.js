// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2,5));

// exports
// const calc2 = require("./test-module-2");

// destructure way : https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15064760?start=681#notes
const {add, multiply, divide} = require("./test-module-2");
console.log(multiply(2,5));
