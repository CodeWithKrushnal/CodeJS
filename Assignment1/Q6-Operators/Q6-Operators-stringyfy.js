let obj = { name: "John", age: 30 };
let arr = [1, 2, 3, 4];

console.log(JSON.stringify(obj));  // '{"name":"John","age":30}'
console.log(JSON.stringify(arr));  // '[1,2,3,4]'
console.log(JSON.stringify(undefined)); // "null"
console.log(JSON.stringify(null));  // "null"