// Using let with an array
let arr1 = [1, 2, 3];
arr1.push(4);
delete arr1[1]; 
console.log(arr1);  // Output: [ 1, <1 empty item>, 3, 4 ]

// Using const with an array
const arr2 = [1, 2, 3];
arr2.push(4);
arr2[0] = 99;
console.log(arr2);  // Output: [ 99, 2, 3, 4 ]
arr2 = [5, 6, 7];  // error
console.log(arr2);  // This line won't be reached.


// Using let with an object
let obj1 = { name: "Alice", age: 25 };
obj1.name = "Bob";
delete obj1.age;
console.log(obj1);   // Output: { name: 'Bob' }

// Using const with an object
const obj2 = { name: "Alice", age: 25 };
obj2.name = "Charlie";
delete obj2.age;
console.log(obj2);     // Output: { name: 'Charlie' }
obj2 = { name: "Bob" };  // error
console.log(obj2);  // This line won't be reached.
