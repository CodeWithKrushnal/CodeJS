let jsonString = '{"name": "John", age: 30}';  // Invalid, because `age` is not in quotes
let out
try {
    out = JSON.parse(jsonString);
} catch (error) {
    console.log(error.message)
    console.log("Error parsing JSON:", error.message);
}

// The Program will throw an error at time of parsing with json.parse method
// Other parts of program will receive undefined json as a response if there is an error with the json  
console.log(out)

// In Case of Json.Stringy
let out2
try {
    out2 = JSON.stringify(jsonString);
} catch (error) {
    console.log(error.message)
    console.log("Error parsing JSON with stringify method:", error.message);
}

// The Program will not throw any error at time of parsing with json.stringify method
// Other parts of program will receive string version of malformed json even if its invalid  
console.log(out2)