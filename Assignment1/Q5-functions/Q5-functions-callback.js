function test(callback) {
    callback();
}

function callbackFunc() {
    console.log("Calling the callback function");
    return 5;
}

test(callbackFunc) //calls test function which will call callback although passing callback function must be done without parenthesis

test(callbackFunc()) //will return error

test(() => callbackFunc()) //Equivalent to test function passed with an annonymus arrow function whcih will return a call to callback


function test2(callback) {
    return callback;
}

console.log(test2(callbackFunc()))
