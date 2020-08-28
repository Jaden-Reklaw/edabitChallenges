/*
Reverse Words Starting With a Particular Letter
Write a function that reverses all the words in a 
sentence that start with a particular letter.

Examples
specialReverse("word searches are super fun", "s")
➞ "word sehcraes are repus fun"

specialReverse("first man to walk on the moon", "m")
➞ "first nam to walk on the noom"

specialReverse("peter piper picked pickled peppers", "p")
➞ "retep repip dekcip delkcip sreppep"
Notes
Reverse the words themselves, not the entire sentence.
All characters in the sentence will be in lower case.
*/

//My answer
const specialReverse = (sentence, letter) => sentence.split(' ').map(item => item[0] === letter ? item.split('').reverse().join('') : item).join(' ');

//Other answer using startsWith Funciton
function specialReverse(s, c) {
	return s.split(' ').map(x => x.startsWith(c) ? x.split('').reverse().join('') : x).join(' ')
}