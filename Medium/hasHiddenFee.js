/*
No Hidden Fees
Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.

Examples
hasHiddenFee(["$2", "$4", "$1", "$8"], "$15") ➞ false

hasHiddenFee(["$1", "$2", "$3"], "$6") ➞ false

hasHiddenFee(["$1"], "$4") ➞ true

Notes
Remember that each price is given as a string.
All $ signs will be at the beginning of the number.
*/

//My Answer
const hasHiddenFee = (prices, t) => prices.map(item => Number(item.slice(1))).reduce((acc, i) => acc + i) === Number(t.slice(1)) ? false : true;

//Jordan you dingus you could have left off the map and just did the reduce
const hasHiddenFee = (prices, t) => prices.reduce((acc,cur) => acc + +cur.slice(1), 0) < +t.slice(1);