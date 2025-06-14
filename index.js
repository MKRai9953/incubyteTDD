const { add } = require("./StringCalculator");

console.log(add(""));
console.log(add("1"));
console.log(add("2", "3"));
console.log(add("1\n2,3"));
console.log(add("//;\n1;2"));
