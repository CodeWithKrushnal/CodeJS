var data;
const apiEndpoint = `https://reqres.in/api/users`;

async function getData(endpoint) {
    const response = await fetch(endpoint);
    const jsonData = await response.json();  // Wait for the JSON data
    return jsonData;  // Return the parsed data
}

function render(data) {
    document.getElementById("pageHeading").innerHTML = "The Received Data is:";
    var table = `<center><table border="1"><thead><tr>`;

    // Dynamically create table headers based on object keys
    for (let keys of Object.keys(data.data[0])) {
        table += `<th>` + keys + `</th>`;
    }
    table += `</tr>`;

    // Render the data into the table
    for (let i = 0; i < data.per_page; i++) {
        table += `<tr>`;
        for (let obj of Object.values(data.data[i])) {
            table += `<td>` + obj + `</td>`;
        }
        table += `</tr>`;
    }

    table += `</thead></table></center>`;
    document.getElementById("tableContainer").innerHTML = table;
}

// Fetch data and render the table
getData(apiEndpoint).then(fetchedData => {
    data = fetchedData;  // Store the fetched data globally
    render(fetchedData);
}).catch(error => {
    console.error("Error fetching data: ", error);
});

function sortByNamesNRender() {
    // Sort the data based on first name
    data.data.sort((a, b) => {
        return (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0);
    });
    render(data);  // Re-render the sorted data
}

// Function to filter the table data based on search input
function filterTable() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredData = data.data.filter(user => {
        return user.first_name.toLowerCase().includes(searchTerm) ||
            user.last_name.toLowerCase().includes(searchTerm);
    });

    // Update the data with the filtered data and re-render the table
    render({
        per_page: filteredData.length,
        data: filteredData
    });
}