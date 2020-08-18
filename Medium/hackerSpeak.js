/*
H4ck3r Sp34k
Create a function that takes a string as an argument 
and returns a coded (h4ck3r 5p34k) version of the string.

Examples
hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"

hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"

hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
Notes
In order to work properly, the function should replace all 'a's with 4, 
'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
*/
//My Answer
const hackerSpeak = (str) => str.split(' ').map(word => word.split('').map(letter => letter === 'a' ? '4' : letter === 'e' ? '3' : letter === 'i' ? '1': letter === 'o' ? '0' : letter === 's' ? '5' : letter).join('')).join(' ');

//Smarter answer using the replace method on strings
const hackerSpeak = (str) => {
    return str
        .replace(/e/g, "3")
        .replace(/i/g, "1")
        .replace(/a/g, "4")
        .replace(/o/g, "0")
        .replace(/s/g, "5");
   }