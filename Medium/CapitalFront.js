/**
 * Move Capital Letters to the Front
 * Create a function that moves all capital 
 * letters to the front of a word.

Examples
capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt"
Notes
Keep the original relative order of the upper 
and lower case letters the same.
 */

//My Solution using two arrays
let capToFront = (string) => {
    let uppers = [];
    let lowers = [];
	for(let letter of string) {
        if(letter === letter.toUpperCase()) {
            uppers.push(letter);
        } else if(letter === letter.toLowerCase()) {
            lowers.push(letter)
        }
    }
    return uppers.join("") + lowers.join("");
}

//Better solution using regular expressions
function capToFront(s) {
    return s.match(/[A-Z]/g).join('') + s.match(/[a-z]/g).join('');
}