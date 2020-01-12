/*
IS-542 HW-2 JavaScript Functions
https://chris3edwards3.github.io/IS-542/hw2.html
By: Chris Edwards
Jan 8, 2020
 */


// Function that calculates the nth Fibonacci Number.
// The 0th is 0, 1st is 1, 2nd is 1, 3rd is 2, etc.

function fibonacci() {
    let n = Math.round(document.getElementById("fib").value);
    let ans;

    if (n < 0) {
        ans = "No Negative Numbers";
    } else if (n === 0) {
        ans = 0;
    } else if (n === 1) {
        ans = 1;
    } else {
        let a = 0;
        let b = 1;
        let count = 2;
        while (count <= n) {
            ans = a + b;
            a = b;
            b = ans;
            count += 1;
        }
    }
    document.getElementById("fibAns").innerHTML = "Answer = " + ans;
}


// Function that calculates n! (the factorial of n).

function factorial() {
    let n = Math.round(document.getElementById("fac").value);
    let ans;

    if (n < 0) {
        ans = "No Negative Numbers";
    } else if (n === 0) {
        ans = 1;
    } else if (n > 0) {
        let count = 1;
        ans = 1;
        while (count < n) {
            ans = ans * (count + 1);
            count += 1;
        }
    }
    document.getElementById("facAns").innerHTML = "Answer = " + ans;
}


// Function that sums up the integers between two given integers (inclusive).

function intSum() {
    let int1 = Math.round(document.getElementById("int1").value);
    let int2 = Math.round(document.getElementById("int2").value);
    let ans;

    if (int1 === int2){
        ans = "Specify two different integers.";
    } else {
        let startInt = Math.min(int1, int2);
        let endInt = Math.max(int1, int2);
        let count = startInt;
        let sum = startInt;
        while (count < endInt) {
            count += 1;
            sum += count;
        }
        ans = "Answer = " + sum;
    }
    document.getElementById("intAns").innerHTML = ans;
}


// Function that splits up a monetary value (cents) into different coins.

function centsToCoins() {
    let cents = Math.round(document.getElementById("cents").value);

    // Calculations
    let quarterRem = cents % 25;
    let quarters = (cents - quarterRem) / 25;

    let dimeRem = quarterRem % 10;
    let dimes = (quarterRem - dimeRem) / 10;

    let nickelRem = dimeRem % 5;
    let nickels = (dimeRem - nickelRem) / 5;

    let pennies = nickelRem;

    // String Creation
    let quarterString = "";
    let dimeString = "";
    let nickelString = "";
    let pennyString = "";

    if (quarters === 1) {
        quarterString = quarters + " quarter. ";
    } else if (quarters > 1) {
        quarterString = quarters + " quarters. ";
    }

    if (dimes === 1) {
        dimeString = dimes + " dime. ";
    } else if (dimes > 1) {
        dimeString = dimes + " dimes. ";
    }

    if (nickels === 1) {
        nickelString = nickels + " nickel. ";
    } else if (nickels > 1) {
        nickelString = nickels + " nickels. ";
    }

    if (pennies === 1) {
        pennyString = pennies + " penny. ";
    } else if (pennies > 1) {
        pennyString = pennies + " pennies. ";
    }

    document.getElementById("coinAns").innerHTML = quarterString + dimeString + nickelString + pennyString;
}