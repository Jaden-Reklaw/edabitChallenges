/*
Neutralisation
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
Worked Example
neutralise("+-+", "+--") ➞ "+-0"
Compare the first characters of each string, then the next in turn.
"+" against a "+" returns another "+".
"-" against a "-" returns another "-".
"+" against a "-" returns "0".
Return the string of characters.
Examples
neutralise("--++--", "++--++") ➞ "000000"

neutralise("-+-+-+", "-+-+-+") ➞ "-+-+-+"

neutralise("-++-", "-+-+") ➞ "-+00"
Notes
The two strings will be the same length.
*/

//My answer
const neutralise = (s1, s2) => {
    let arr = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === '+' && s2[i] === '+') {
            arr.push('+');
        } else if (s1[i] === '-' && s2[i] === '-') {
            arr.push('-');
        } else {
            arr.push(0);
        }
    }
    return arr.join('');
}

//Other answer
//Spread operator to turn s1 into an array then map to go over each item with idx return sym if match return 0 if no match
const neutralise = (s1, s2) =>  [...s1].map((sym, idx) => sym === s2[idx] ? sym : '0').join('');
