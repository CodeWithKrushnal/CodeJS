// This Function returnes a promise object with settimeout in resolve field
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function for excution of sleep promise function
async function exampleFunction() {
    console.log("Execution started");

    document.getElementById("resHeading").innerHTML = "Waiting for 2 Seconds"

    // Wait for 2 seconds
    await sleep(2000);


    console.log("Execution resumed after 2 seconds");

    document.getElementById("resHeading").innerHTML = "Fetching Data"
    await fetch('https://reqres.in/api/users').then(response => response.json()).then(data => {
        console.log(JSON.stringify(data))
        document.getElementById("resHeading").innerHTML = "The Received data is: "
        document.getElementById("apiRes").innerHTML = JSON.stringify(data)
    })
}
exampleFunction();