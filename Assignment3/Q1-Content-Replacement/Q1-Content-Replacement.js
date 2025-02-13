const elements =
    document.querySelectorAll("p");
const buttonText = "How's the Josh?";

// Function to change content 
function changeContent() {
    for (const element of elements) {
        element.innerHTML = buttonText;
    }
}