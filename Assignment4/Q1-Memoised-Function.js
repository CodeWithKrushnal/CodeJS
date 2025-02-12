function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        // Convert arguments to a string to use as a key
        const key = JSON.stringify(args);

        // If the result is cached, return the cached value
        if (cache.has(key)) {
            console.log('Returning cached value for', args);
            return cache.get(key);
        }

        // Otherwise, call the function and cache the result
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Example usage
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);


function callfunc() {
    const num1element = document.getElementById("num1")
    const num2element = document.getElementById("num2")
    if (num1element == null || num2element == null) {
        console.log("Error: No Element In Dom")
    } else {
        const num1 = Number(num1element.value)
        const num2 = Number(num2element.value)
        document.getElementById("output").innerText = "The Memoised addition of these numbers is: " + memoizedAdd(num1, num2)
    }
}