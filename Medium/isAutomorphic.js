/*
Automorphic Numbers
A number n is automorphic if n^2 ends in n.

For example: n=5, n^2=25

Create a function that takes a number and returns 
true if the number is automorphic, false if it isn't.

Examples
isAutomorphic(5) ➞ true

isAutomorphic(8) ➞ false

isAutomorphic(76) ➞ true

Notes
N/A
*/

//My answer trying not to use endswith funciton
const isAutomorphic = n => {
    const squared = String(n**2);
    const lastDigits = [];
    for(let i=1; i <= String(n).length; i++) {
        lastDigits.push(squared[squared.length - i]);
    }
    return lastDigits.reverse().join('') === String(n);
}

//Other answer
const isAutomorphic = num => String(Math.pow(num, 2)).endsWith(num);
