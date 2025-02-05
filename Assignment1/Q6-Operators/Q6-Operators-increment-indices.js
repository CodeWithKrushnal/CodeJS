let i = 5;
console.log(++i);  // Output: 6 (increment happens first, then printed)
console.log(i);    // Output: 6

i = 5;
console.log(i++);  // Output: 5 (printed first, then increment happens)
console.log(i);    // Output: 6

let str = "Hello";

console.log(str[10]); // undefined, because 10 is out of range
console.log(str[-1]); // undefined, because negative indices are not supported