let age = 25;


//Using if-else
if (age <= 12) {
    console.log("child");
} else if (age >= 13 && age <= 18) {
    console.log("teen");
} else {
    console.log("adult");
}


//Using switch

switch (true) {
    case (age <= 12):
        console.log("child");
        break;
    case (age >= 13 && age <= 18):
        console.log("teen");
        break;
    default:
        console.log("adult");
        break;
}

// In General Switch Usage Convention we use switch variable followed by the expression to compare the output with the cases decribed consecutively.
// Although in this case we won't be able to follow the same convention because we are evaluating the variable against its possible range of outputs and it would be difficult to evaulate the same for each possible value of output.
// Therefore we insert true in place of expression such that we can compare the boolean outputs of expressions inserted in case sections to the true value.