/*
Practice Encapsulation
Module that provides validation for a given string for the various conditions.
Chris Edwards | Jan 14, 2020

I had never really programmed with nested functions in this way. It was good practice to encapsulate a variable and
make it private outside the function.
I learned some other things while doing this as well. First, I didn't have previous experience with regular expressions.
It was good to learn some of the methods associated with those. I also had good practice writing efficient if loops. I
use WebStorm and the built-in linter gives suggestions. One of those was to reverse my if loop, and it helped reduce a
few lines of code and make my loop easier to understand.
As far as the easy and hard parts, the functions dealing with numbers were easy, whereas the email and string length
functions were more difficult.
 */

const validator = (function () {
    let isValid = true;

    return {
        isNumeric: function (text) {
            if (typeof (text) !== 'number') {
                isValid = false;
            }
            return isValid;
        },
        isInteger: function (text) {
            if (!Number.isInteger(text)) {
                isValid = false;
            }
            return isValid;
        },
        isNegativeInteger: function (text) {
            if (!((Number.isInteger(text)) && (text < 0))) {
                isValid = false;
            }
            return isValid;
        },
        isPositiveInteger: function (text) {
            if (!((Number.isInteger(text)) && (text > 0))) {
                isValid = false;
            }
            return isValid;
        },
        isNonNegativeInteger: function (text) {
            if (!((Number.isInteger(text)) && (text >= 0))) {
                isValid = false;
            }
            return isValid;
        },
        isInRange: function (text, m, n) {
            if (typeof (text) !== 'number') {
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
            let rexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            if (!rexp.test(text)) {
                isValid = false;
            }
            return isValid;
        },
        isNonEmpty: function (text) {
            if (text === '') {
                isValid = false;
            }
            return isValid;
        },
        lengthIsInRange: function (text, m, n) {
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
            if (!regex.test(text)) {
                isValid = false;
            }
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

validator.reset();

validator.isNumeric(-5.3456);
validator.isInteger(56);
validator.isNegativeInteger(-1);
validator.isPositiveInteger(5);
validator.isNonNegativeInteger(0);
validator.isInRange(4,1,8);
validator.isValidEmail('code@byu.edu');
validator.isNonEmpty('String');
validator.lengthIsInRange('text', 1, 6);
validator.matchesRegex('abcd', /ab/);

if (validator.isValid()) {
    console.log('All is well');
} else {
    console.log('Something failed validation'); }


