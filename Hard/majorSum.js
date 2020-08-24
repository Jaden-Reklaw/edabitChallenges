/*
The Major Sum
Create a function that takes an integer array and return the 
biggest between positive sum, negative sum, or 0s count. The 
major is understood as the greatest absolute.

arr = [1,2,3,4,0,0,-3,-2], the function has to return 10, because:

Positive sum = 1+2+3+4 = 10
Negative sum = (-3)+(-2) = -5
0s count = 2 (there are two zeros in array)
Examples
majorSum([1, 2, 3, 4, 0, 0, -3, -2]) ➞ 10

majorSum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0]) ➞ -27

majorSum([0, 0, 0, 0, 0, 1, 2, -3]) ➞ 5
Because -3 < 1+2 < 0sCount = 5

Notes
All numbers are integers.
There aren't empty arrays.
All tests are made to return only one value.
*/

//My answer
const majorSum = arr => {
    let positives = [];
  let negatives = [];
  let zeros = [];

  for(let num of arr) {
    if(num > 0) {
      positives.push(num);
    } else if(num < 0) {
      negatives.push(num);
    } else {
      zeros.push(num)
    }
  }
	
  if(positives.length > 0) {
    positives = positives.reduce((acc, i) => acc + i);
  } else {
    positives = 0;
  }

  if(negatives.length > 0) {
    negatives = negatives.reduce((acc, i) => acc + i);
  } else {
    negatives = 0;
  }
	
	zeros = zeros.length;
	
	return (positives > Math.abs(negatives) && positives >  zeros ? positives : Math.abs(negatives) > zeros ? negatives : zeros);
}

//Other solutions
const majorSum = arr => {
	let zeros = 0, pos = 0, neg = 0;
	for (const n of arr) {
		if (!n) zeros++;
		else if (n > 0) pos += n;
		else neg += n;
	}
	const max = Math.max(zeros, pos, Math.abs(neg));
	return (max + neg) ? max : neg;
};

function majorSum(arr){
    let [pos, neg, zero] = [0, 0, 0];
    arr.forEach(i => {
            i > 0 ? pos += i : i < 0 ? neg += i : zero++;
    })
    return [pos, neg, zero].sort((a, b) => Math.abs(b) - Math.abs(a))[0];
}