document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;

    const data = {
        name: name,
        job: job
    };

    fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
            alert("User data submitted successfully!");
            document.getElementById("statusHeading").innerHTML = "Submitted Data Succesfully, Received Response is:"
            document.getElementById("dataPara").innerHTML = JSON.stringify(data)
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("There was an error submitting your data.");
            document.getElementById("statusHeading").innerHTML = "There was an error submitting your data."
        });
});