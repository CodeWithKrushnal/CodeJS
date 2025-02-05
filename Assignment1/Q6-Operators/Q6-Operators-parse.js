let jsonString = '{"name": "John", age: 30}';  // Invalid, because `age` is not in quotes
let out
try {
    out = JSON.parse(jsonString);
} catch (error) {
    console.log(error.message)
    console.log("Error parsing JSON:", error.message);
}

// other parts of program will receive undefined json as a response if there is an error with the parsing 
console.log(out)