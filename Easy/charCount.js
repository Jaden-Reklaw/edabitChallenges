/*
Count Instances of a Character in a String

Create a function that takes two strings as arguments and 
returns the number of times the first string (the single 
character) is found in the second string.

Examples
charCount("a", "edabit") ➞ 1

charCount("c", "Chamber of secrets") ➞ 1

charCount("b", "big fat bubble") ➞ 4
Notes
Your output must be case-sensitive (see second example).
*/

function charCount(myChar, str) {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === myChar) {
            total++;
        }
    }
    return total;	
}

//Other way uses spread operator on the string filter method and returns the length of the array after filter
function charCount(myChar, str) {
	return [...str].filter(x => x===myChar).length;
}

