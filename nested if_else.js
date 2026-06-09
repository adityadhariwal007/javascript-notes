// nested if means if statement inside another if statement

let age = 18;
let has_license = false;
if (age >= 18) {
    if (has_license) { console.log("you can drive"); }
    else { console.log("go watch pogo, kid"); }
}
else {
    console.log("you are too young to drive");}

    // ek ek step read karte chalna hai up to down, if one gets false then jump to next line.

    let marks = 85;
    let sportsQuota = true;

    if (marks >= 80) {
        if (sportsQuota) {
            console.log("Admission with sports benefits");
        } else {
            console.log("Regular admission");
        }
    } else {
        console.log("Admission denied");

    }
