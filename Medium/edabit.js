/*
"EdaBit" Challenge
Create a function that returns the array of numbers 
from a given range. But for multiples of three, return 
“Eda” instead of the number and for the multiples of 
five, return “Bit”. For numbers which are multiples 
of both three and five, return “EdaBit”.

Examples
edaBit(0, 10) ➞ ["EdaBit", 1, 2, "Eda", 4, "Bit", "Eda", 7, 8, "Eda", "Bit" ]

edaBit(14, 20) ➞ [14,  "EdaBit", 16, 17,  "Eda", 19, "Bit" ]

edaBit(99, 106) ➞ ["Eda", "Bit", 101, "Eda", 103, 104, "EdaBit", 106 ]
Notes
In case the number 0 happens to be in the range, return "EdaBit" as well.
*/

//My Answer
const edaBit = (start, end) => {
	const range = (begin, stop, step) => Array.from({ length: (stop - begin) / step + 1}, (_, i) => {
    if((begin + (i * step)) % 3 === 0 && (begin + (i * step)) % 5 === 0) {
        return 'EdaBit';
      } else if((begin + (i * step)) % 3 === 0) {
        return 'Eda'
      } else if((begin + (i * step)) % 5 === 0) {
        return 'Bit'
      } else {
        return begin + (i * step);
      }
    });
  let arr = range(start, end, 1);
  return arr;
}

//My other solution
const edaBit = (start, end) => {
    let answer = [];
    for(let i = start; i <= end; i++) {
        (i % 15 === 0) ? answer.push('EdaBit') : (i % 5 === 0) ? answer.push('Bit') : (i % 3 === 0) ? answer.push('Eda') : answer.push(i);
    }
    return answer;
}