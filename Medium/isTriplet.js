/**
Pythagorean Triplet
Create a function that validates whether three 
given integers form a Pythagorean triplet. 
The sum of the squares of the two smallest 
integers must equal the square of the largest 
number to be validated.

Examples
isTriplet(3, 4, 5) ➞ true
// 3² + 4² = 25
// 5² = 25

isTriplet(13, 5, 12) ➞ true
// 5² + 12² = 169
// 13² = 169

isTriplet(1, 2, 3) ➞ false
// 1² + 2² = 5
// 3² = 9
Notes
Numbers may not be given in a sorted order.
 */

//My Solution
const isTriplet = (n1, n2, n3) => {
    const arr = [n1, n2, n3].sort(function(a, b){return a-b});
    return(arr[0]**2 + arr[1]**2 === arr[2]**2);
}

//Other solution Definitely a math genius
//math.max get the highest number then they squared then multiplied by 2 
//the reason they times by 2 is they square all the numbers then add them
//n1**2+n2**2+n3**2
function isTriplet(n1, n2, n3) {
	return n1**2+n2**2+n3**2==2*Math.max(n1,n2,n3)**2
}