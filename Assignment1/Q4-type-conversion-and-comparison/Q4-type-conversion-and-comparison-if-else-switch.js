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
