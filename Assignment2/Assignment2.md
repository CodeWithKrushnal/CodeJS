# Assignment 2

## 1. Write a function that can stop execution of a function for the number of milliseconds

```js
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function for eecution of sleep promise function
async function exampleFunction() {
    console.log("Execution started");

    // Wait for 2 seconds
    await sleep(2000);

    console.log("Execution resumed after 2 seconds");
}
```
---

## 2. Using promises - write a function that fetches data from an API endpoint (GET `https://reqres.in/api/users` ). Log the data into the console once it is received

```js
function fetchData() {
    fetch('https://reqres.in/api/users')
        .then(response => {
            // Check if the response is successful (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the data to the console
            document.getElementById("resHeading").innerHTML = "The Result of API call is:"
            document.getElementById("apiRes").innerHTML = JSON.stringify(data)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Call the function to fetch and log the data
fetchData();

```

## 3. What will be printed to the console when the promise resolves and when it rejects?

```js
const testAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Test Resolve');
        } else {
            reject('Test Reject');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction: ', err);
    });
};
testAsyncFunction()
    .then((res) => {
        console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));
```
---
The Output of the Code given above is dependent on the output of Math.random function.

- In case of Resolve the output will be:<br>
  `Response in then block:  Test Resolve`

- In case of Resolve the output will be:<br>
  `Error caught in testAsyncFunction:  Test Reject`

## 4. What will be printed to the console?

```js
const testAsyncFunction = () => {
    return Promise.reject('Test static reject');
};

testAsyncFunction()
    .then((res) => {
        console.log('Response in then block', res);

    })
    .catch((err) => console.log('Error in catch block', err));
```
---
The program above will always print an error statement as:
`Error in catch block Test static reject`
Because testAsyncFunction only operates on reject statement.

## 5. What will be printed to the console?

```js
const testAsyncFunction = () => {
    return new Promise((resolve, reject) => {
            if (Math.random() > 0.5) {
                resolve('Test Resolve');
            } else
                reject('Test Reject');
        }
    }).catch((err) => {
    console.log('Error caught in testAsyncFunction', err);
    throw new Error('Forced error');
});
};
testAsyncFunction()
    .then((res) => {
        console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));
```
---
The Output of the Code given above is dependent on the output of Math.random function.

- In case of Resolve the output will be:<br>
  `Response in then block:  Test Resolve`

- In case of Resolve the output will be:<br>
  `Error caught in testAsyncFunction Test Reject
Error in catch block:  Error: Forced error`