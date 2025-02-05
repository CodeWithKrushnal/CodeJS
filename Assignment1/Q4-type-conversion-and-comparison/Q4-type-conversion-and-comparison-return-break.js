function checkNumbers() {
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            return "Found 5, exiting the function.";
        }
        console.log(i);
    }
}

console.log(checkNumbers()); //Output: 0 1 2 3 4 Found 5, exiting the function.

function checkNumbersWithBreak() {
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        console.log(i);
    }
}

checkNumbersWithBreak(); //Output: 0 1 2 3 4 