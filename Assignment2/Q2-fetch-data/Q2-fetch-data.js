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