/*
Oddly or Evenly Positioned
Create a function that returns the characters from an array 
or string r on odd or even positions, depending on the 
specifier s. The specifier will be "odd" for items on 
odd positions (1, 3, 5, ...) and "even" for items on 
even positions (2, 4, 6, ...).

Examples
charAtPos([2, 4, 6, 8, 10], "even") ➞ [4, 8]
4 & 8 occupy the 2nd & 4th positions

charAtPos("EDABIT", "odd") ➞ "EAI"
"E", "A" and "I" occupy the 1st, 3rd and 5th positions

charAtPos(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "odd") ➞ ["A", "B", "T", "A", "I", "Y"]
Notes
Arrays are zero-indexed, so, index+1 = position or position-1 = index.
A slightly different version of this challenge is found here.
A recursive version of this challenge is here.
*/

//My answer
const charAtPos = (r, s) => {
    let answer = [];
    if(s === 'odd') {
      for(let i=0; i < r.length; i++) {
        if(i%2 === 0) {
          answer.push(r[i]);
        }
      }
    } else if(s === 'even') {
      for(let i=0; i < r.length; i++) {
        if(i%2 === 1) {
          answer.push(r[i]);
        }
      }
    }
    if(typeof r === 'string') {
      return answer.join('');
    } 
    return answer;
  };

//Other Answer
const charAtPos = (arrOrStr, evenOdd) => {
    const filtered = Array.from(arrOrStr).filter(
      (_, i) => i % 2 === (evenOdd === 'even' ? 1 : 0),
    );
    return Array.isArray(arrOrStr) ? filtered : filtered.join('');
};