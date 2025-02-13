// This Function returnes a promise object with settimeout in resolve field
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

exampleFunction();