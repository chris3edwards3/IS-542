/*
Practice Encapsulation
Module that provides validation for form filled out on the hw4.html page.
Chris Edwards | Jan 20, 2020
 */

const validator = (function () {
    let isValid = true;
    return {
        isNumeric: function (text) {
            isValid = !isNaN(text);
            return isValid;
        },
        isInteger: function (text) {
            isValid = Number.isInteger(text);
            return isValid;
        },
        isNegativeInteger: function (text) {
            isValid = (Number.isInteger(text)) && (text < 0);
            return isValid;
        },
        isPositiveInteger: function (text) {
            isValid = (Number.isInteger(text)) && (text > 0);
            return isValid;
        },
        isNonNegativeInteger: function (text) {
            isValid = (Number.isInteger(text)) && (text >= 0);
            return isValid;
        },
        isInRange: function (text, m, n) {
            isValid = true;
            if (isNaN(text)) {
                isValid = false;
            } else {
                if ((m !== undefined) && (text < m)) {
                    isValid = false;
                }
                if ((n !== undefined) && (text > n)) {
                    isValid = false;
                }
            }
            return isValid;
        },
        isValidEmail: function (text) {
            // Cite Source of this regular expression
            let rexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = rexp.test(text);
            return isValid;
        },
        isNonEmpty: function (text) {
            isValid = ((typeof(text) === 'string') && (text.length > 0));
            return isValid;
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
            return isValid;
        },
        matchesRegex: function (text, regex) {
            isValid = regex.test(text);
            return isValid;
        },
        isValid: function () {
            return isValid;
        },
        reset: function () {
            isValid = true;
        }
    }
}());

function validateForm() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let pnum = document.getElementById("pnum").value;
    let email = document.getElementById("email").value;
    let errors = '';
    let success = '';

    if (!validator.isNonEmpty(fname) || !validator.isNonEmpty(lname)) {
        errors = errors.concat('Name fields cannot be empty. ');
    }

    if (!validator.isNonEmpty(age)) {
        errors = errors.concat('Age field cannot be empty. ')
    } else if (!validator.isNonNegativeInteger(Math.round(age))) {
        errors = errors.concat('Age field must be an integer. ')
    } else if (!validator.isInRange(age, 0, 110)) {
        errors = errors.concat('Please enter a valid age (less than 110). ')
    }

    if (!validator.isNonEmpty(pnum)) {
        errors = errors.concat('Phone Number field cannot be empty. ')
    } else if (!validator.lengthIsInRange(pnum, 10,11)) {
        errors = errors.concat('Phone number must be 10 or 11 digits. ')
    }

    if (!validator.isNonEmpty(email)) {
        errors = errors.concat('Email field cannot be empty. ')
    } else if (!validator.isValidEmail(email)) {
        errors = errors.concat('Invalid Email Address. ')
    }

    if (errors === '') {
        success = 'Success!';
    }

    document.getElementById("errors").innerHTML = errors;
    document.getElementById("success").innerHTML = success;
}


