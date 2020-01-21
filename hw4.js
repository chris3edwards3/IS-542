/*
hw4.js
Practice Encapsulation
Module that provides validation for the form filled out on the 'hw4.html' page.
Chris Edwards | Jan 20, 2020
 */

const validator = (function () {
    let isValid = true;
    let errorArray = Array(9);
    return {
        isNonEmpty: function (text) {
            isValid = ((typeof(text) === 'string') && (text.length > 0));
            if (!isValid) { errorArray.push('Empty Field. ') }
            return errorArray;
        },
        isNumeric: function (text) {
            isValid = !isNaN(text);
            if (!isValid) { errorArray.push('Must be Numeric. ') }
            return errorArray;
        },
        isInteger: function (text) {
            isValid = Number.isInteger(text);
            if (!isValid) { errorArray.push('Must be an Integer. ') }
            console.log(isValid);
            return errorArray;
        },
        isNegativeInteger: function (text) {
            isValid = (Number.isInteger(text)) && (Number(text) < 0);
            if (!isValid) { errorArray.push('Must be a Negative Integer. ') }
            return errorArray;
        },
        isPositiveInteger: function (text) {
            isValid = (Number.isInteger(text)) && (Number(text) > 0);
            if (!isValid) { errorArray.push('Must be a Positive Integer. ') }
            return errorArray;
        },
        isNonNegativeInteger: function (text) {
            isValid = (Number.isInteger(text)) && (Number(text) >= 0);
            if (!isValid) { errorArray.push('Must be an Integer 0 or greater. ') }
            return errorArray;
        },
        isInRange: function (text, m, n) {
            isValid = true;
            if (isNaN(text)) {
                isValid = false;
            } else {
                if ((m !== undefined) && (Number(text) < m)) {
                    isValid = false;
                }
                if ((n !== undefined) && (Number(text) > n)) {
                    isValid = false;
                }
            }
            if (!isValid) { errorArray.push('Must be between 0 and 110. ') }
            return errorArray;
        },
        isValidEmail: function (text) {
            // Cite Source of this regular expression
            let rexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = rexp.test(text);
            if (!isValid) { errorArray.push('Invalid Email Address. ') }
            return errorArray;
        },
        lengthIsInRange: function (text, m, n) {
            isValid = true;
            if (typeof (text) !== 'string') {
                text = text.toString();
            }
            if ((m !== undefined) && (text.length < m)) {
                isValid = false;
            }
            if ((n !== undefined) && (text.length > n)) {
                isValid = false;
            }
            if (!isValid) { errorArray.push('Must be 10 or 11 digits. ') }
            return errorArray;
        },
        matchesRegex: function (text, regex) {
            isValid = regex.test(text);
            if (!isValid) { errorArray.push('String does not match given regex. ') }
            return errorArray;
        },
        isValid: function () {
            return errorArray.join(separator = '');
        },
        reset: function () {
            isValid = true;
            errorArray = Array(9);
        },
    }
}());

function validateForm() {
    let fname = document.getElementById("fname").value;
    validator.isNonEmpty(fname);
    let fnErr = validator.isValid();
    document.getElementById("fnErr").innerHTML = fnErr;
    validator.reset();

    let lname = document.getElementById("lname").value;
    validator.isNonEmpty(lname);
    let lnErr = validator.isValid();
    document.getElementById("lnErr").innerHTML = lnErr;
    validator.reset();

    let age = document.getElementById("age").value;
    validator.isNonEmpty(age);
    validator.isNumeric(age);
    validator.isInRange(age, 0, 110);
    let ageErr = validator.isValid();
    document.getElementById("ageErr").innerHTML = ageErr;
    validator.reset();

    let pnum = document.getElementById("pnum").value;
    validator.isNonEmpty(pnum);
    validator.isNumeric(pnum);
    validator.lengthIsInRange(pnum, 10,11);
    let pnErr = validator.isValid();
    document.getElementById("pnErr").innerHTML = pnErr;
    validator.reset();

    let email = document.getElementById("email").value;
    validator.isNonEmpty(email);
    validator.isValidEmail(email);
    let emErr = validator.isValid();
    document.getElementById("emErr").innerHTML = emErr;
    validator.reset();

    let strSum = fnErr + lnErr + ageErr + pnErr + emErr;
    let success = '';
    if (strSum === '') { success = 'Successful Submission!' }
    document.getElementById("success").innerHTML = success;
}


