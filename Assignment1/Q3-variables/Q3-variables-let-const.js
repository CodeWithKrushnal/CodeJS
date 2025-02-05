// Using let
let a;
console.log("Before assignment (let):", a);  // This will log 'undefined' since 'a' is declared but not assigned a value.
a = 10;
console.log("After assignment (let):", a);  // This will log '10' since 'a' has been assigned the value 10.

// Using const
const b = 20;
console.log("Before assignment (const):", b);  // This will log '20', since 'b' is already assigned a value.
b = 30; // This will throw an error because you cannot reassign a const variable.
console.log("After assignment (const):", b);  // This won't be reached because of the error.
