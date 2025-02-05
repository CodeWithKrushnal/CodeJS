// Example Variables
let num = 10;
let str = "Hello";
let isTrue = true;
let arr = [1, 2, 3];
let obj = {name: "John", age: 30};
let nullVar = null;
let NaNVar = NaN;

// Checking types using typeof
console.log(typeof num);     // "number"
console.log(typeof str);     // "string"
console.log(typeof isTrue);  // "boolean"
console.log(typeof arr);     // "object"
console.log(typeof obj);     // "object"
console.log(typeof nullVar); // "object"
console.log(typeof NaNVar);  // "number"

// How to check if a variable is an array
console.log(Array.isArray(arr));  // true
console.log(Array.isArray(obj));  // false

// How to check if a variable is NaN
console.log(Number.isNaN(NaNVar));  // true
console.log(isNaN(NaNVar));         // true
