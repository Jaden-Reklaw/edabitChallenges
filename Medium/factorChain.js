/*
Factor Chain
A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

[3, 6, 12, 36]

3 is a factor of 6
6 is a factor of 12
12 is a factor of 36

Create a function that determines whether or not an array is a factor chain.

Examples
factorChain([1, 2, 4, 8, 16, 32]) ➞ true

factorChain([1, 1, 1, 1, 1, 1]) ➞ true

factorChain([2, 4, 6, 7, 12]) ➞ false

factorChain([10, 1]) ➞ false
*/

//My Answer
const factorChain = arr => {
    const lastNum = arr[arr.length - 1];

    for (let num of arr) {
        if (lastNum % num !== 0) {
            return false;
        }
    }
    return true;
}

//Other answer uses array every function to check a condition if it ever fails it will be false
const factorChain = arr => arr.slice(1).every((num, i) => num % arr[i] === 0);
