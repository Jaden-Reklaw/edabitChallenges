/**
 * 
Integer in Range?
Create a function which validates whether a number n is exclusively within the bounds of lower and upper. Return false if n is not an integer.

Examples
intWithinBounds(3, 1, 9) ➞ true

intWithinBounds(6, 1, 6) ➞ false

intWithinBounds(4.5, 3, 8) ➞ false
Notes
Exclusively means that a number is considered not within the bounds if it is equal to the upper bound (see example #2).
Bounds will be always given as integers.
*/

//my solution
let intWithinBounds = (n, lower, upper) => {
	if(JSON.stringify(n).includes('.')) {
        return false;
    } else {
        if(n >= lower && n < upper) {
            return true;
        } else {
            return false;
        }
    }
}

//ES6 and better way isInteger to check the number instead of JSON.Stringify
const intWithinBounds = (n, lower, upper) => (Number.isInteger(n) && lower <= n && upper > n);
