function test(callback) {
    callback();
}

function callbackFunc() {
    console.log("Calling the callback function");
    return 5;
}

test(callbackFunc) //calls test function which will call callback although passing callback function must be done without parenthesis

test(callbackFunc()) //will return error

// Why The Error will Occur: When we use '()' parenthesis followed by the function name its meant to call the function immidiately.
// Therefore the call to callbackFunc will be executed immidiately and return 5. So the call to function test effectively becomes test(5)
// Although test function expects a function in argument instead it receives number hence the error is encountered. The type of error is TypeError because of same reason.

test(() => callbackFunc()) //Equivalent to test function passed with an annonymus arrow function whcih will return a call to callback


function test2(callback) {
    return callback;
}

console.log(test2(callbackFunc()))


