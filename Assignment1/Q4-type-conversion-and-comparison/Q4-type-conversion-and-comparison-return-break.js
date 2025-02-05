function checkNumbers() {
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            return "Found 5, exiting the function.";
        }
        console.log(i);
    }
}

console.log(checkNumbers());

function checkNumbersWithBreak() {
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        console.log(i);
    }
}

checkNumbersWithBreak();