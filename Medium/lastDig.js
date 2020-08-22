/*
Last Digit Ultimate
Your job is to create a function, that takes 3 numbers: a, b, c and returns true if the last digit of (the last digit of a * the last digit of b) = the last digit of c. Check the examples below for an explanation.

Examples
lastDig(25, 21, 125) ➞ true
The last digit of 25 is 5, the last digit of 21 is 1, and the last
digit of 125 is 5, and the last digit of 5*1 = 5, which is equal
to the last digit of 125(5).

lastDig(55, 226, 5190) ➞ true
The last digit of 55 is 5, the last digit of 226 is 6, and the last
digit of 5190 is 0, and the last digit of 5*6 = 30 is 0, which is
equal to the last digit of 5190(0).

lastDig(12, 215, 2142) ➞ false
The last digit of 12 is 2, the last digit of 215 is 5, and the last
digit of 2142 is 2, and the last digit of 2*5 = 10 is 0, which is
not equal to the last digit of 2142(2).
Notes
If you still don't understand:
The last digit of a = aa, the last digit of b = bb, and the last digit of c = cc.
Return true if the last digit of aa*bb is equal to cc, and false otherwise.
Numbers can be negative.
*/

//My Solution
const lastDig = (a, b, c) => {
	let stringA = a.toString();
  let stringB = b.toString();
  let stringC = c.toString();

  const lastDigit = String(Number(stringA[stringA.length - 1]) * Number(stringB[stringB.length - 1]));

  return lastDigit[lastDigit.length - 1] === stringC[stringC.length - 1];
}

//Other solution
const lastDigit = num => Number(String(num).slice(-1));

const lastDig = (a, b, c) =>
  lastDigit(lastDigit(a) * lastDigit(b)) === lastDigit(c);