var seed1 = 0
var seed2 = 1
function* fib() {
    while (true) {
        var temp = seed1 + seed2
        seed1 = seed2
        seed2 = temp
        yield temp
    }
}
function output() {
    console.log(document.getElementById("output").innerText)
    document.getElementById("output").innerText = document.getElementById("output").innerText + ", " + fib().next().value
}