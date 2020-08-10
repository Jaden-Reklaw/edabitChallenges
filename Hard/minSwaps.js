/**
Converting One Binary String to Another
Write a function that returns the minimum number 
of swaps to convert the first binary string into 
the second.

Examples
minSwaps("1100", "1001") ➞ 1

minSwaps("110011", "010111") ➞ 1

minSwaps("10011001", "01100110") ➞ 4
Notes
Both binary strings will be of equal length.
Both binary strings will have an equal number 
of zeroes and ones.
A swap is switching two elements in a string 
(swaps do not have to be adjacent).
*/

let minSwaps = (s1, s2) => {
    let swaps = 0;
    if(s1 === s2) {
        return swaps;
    }
    
    for(let i = 0; i < s2.length; i++) {
        if(s1[i] !== s2[i]) {
            swaps++;
        }
    }
    return swaps/2;
}

//Other solution not that readable but basically the same thing as above
function minSwaps(s1, s2) {
	return s1.split('').filter((char,i) => char !=s2[i]).length/2;
}